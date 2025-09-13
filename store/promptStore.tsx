import { OutlineCard } from '@/lib/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type page = "create" | "creative-ai" | "create-scratch"

type prompt = {
    id : string;
    title: string;
    createdAt : string;
    outline: OutlineCard[] | []
}

interface PromptStore {
    page: page;
    setPage: (page: page) => void;
    prompt: prompt[];
    setPrompt: (prompt: prompt) => void;
}

export const promptStore = create<PromptStore>()(persist((set) => ({
    page: "create",
    setPage: (page: page) => set({ page }),
    prompt: [{
        id: "1",
        title: "Title",
        createdAt: "createdAt",
        outline: [{
            id: "1",
            title: "Outline",
            order: 1,
        }]  
    }],
    setPrompt: (prompt: prompt) => set((state) => ({ prompt: [...state.prompt, prompt] })),
}), {
    name: "prompt-store",
}));