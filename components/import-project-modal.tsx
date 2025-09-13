"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImportProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onImport: (files: File[]) => void
}

interface FileWithStatus {
  file: File
  status: "pending" | "valid" | "invalid"
  error?: string
}

export function ImportProjectModal({ isOpen, onClose, onImport }: ImportProjectModalProps) {
  const [files, setFiles] = useState<FileWithStatus[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const acceptedTypes = [".pdf", ".pptx"]
  const acceptedMimeTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ]

  const validateFile = (file: File): { isValid: boolean; error?: string } => {
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()

    if (!acceptedTypes.includes(fileExtension) && !acceptedMimeTypes.includes(file.type)) {
      return { isValid: false, error: "Only PDF and PPTX files are allowed" }
    }

    if (file.size > 50 * 1024 * 1024) {
      // 50MB limit
      return { isValid: false, error: "File size must be less than 50MB" }
    }

    return { isValid: true }
  }

  const processFiles = useCallback((fileList: FileList) => {
    const newFiles: FileWithStatus[] = Array.from(fileList).map((file) => {
      const validation = validateFile(file)
      return {
        file,
        status: validation.isValid ? "valid" : "invalid",
        error: validation.error,
      }
    })

    setFiles((prev) => {
      // Remove duplicates based on file name and size
      const existing = prev.filter(
        (existingFile) =>
          !newFiles.some(
            (newFile) => newFile.file.name === existingFile.file.name && newFile.file.size === existingFile.file.size,
          ),
      )
      return [...existing, ...newFiles]
    })
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)

      const droppedFiles = e.dataTransfer.files
      if (droppedFiles.length > 0) {
        processFiles(droppedFiles)
      }
    },
    [processFiles],
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files
      if (selectedFiles && selectedFiles.length > 0) {
        processFiles(selectedFiles)
      }
    },
    [processFiles],
  )

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleImport = () => {
    const validFiles = files.filter((f) => f.status === "valid").map((f) => f.file)
    if (validFiles.length > 0) {
      onImport(validFiles)
      setFiles([])
    }
  }

  const handleClose = () => {
    setFiles([])
    onClose()
  }

  const validFilesCount = files.filter((f) => f.status === "valid").length

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import Projects</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
              isDragOver
                ? "border-primary bg-primary/5"
                : "border-muted-foreground/25 hover:border-muted-foreground/50",
            )}
          >
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Drag and drop your files here, or{" "}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-primary hover:underline"
                >
                  browse
                </button>
              </p>
              <p className="text-xs text-muted-foreground">Supports PDF and PPTX files (max 50MB each)</p>
            </div>
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.pptx,application/pdf,application/vnd.openxmlformats-officedocument.presentationml.presentation"
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-2 max-h-48 overflow-y-auto">
              <h4 className="text-sm font-medium">Selected Files ({files.length})</h4>
              {files.map((fileWithStatus, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border",
                    fileWithStatus.status === "valid"
                      ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
                      : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
                  )}
                >
                  <FileText className="h-4 w-4 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{fileWithStatus.file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(fileWithStatus.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    {fileWithStatus.error && (
                      <p className="text-xs text-red-600 dark:text-red-400">{fileWithStatus.error}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {fileWithStatus.status === "valid" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <Button variant="ghost" size="sm" onClick={() => removeFile(index)} className="h-6 w-6 p-0">
                      <X className="h-3 w-3 cursor-pointer" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleImport} disabled={validFilesCount === 0}>
              Import {validFilesCount > 0 && `(${validFilesCount})`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
