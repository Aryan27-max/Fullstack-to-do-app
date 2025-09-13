"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Animation properties
    const slides: Slide[] = [];
    const colors =
      theme === "dark"
        ? ["#ea580c", "#7c3aed", "#db2777", "#0891b2", "#059669"] // Darker variants for dark mode
        : ["#f97316", "#8b5cf6", "#ec4899", "#0ea5e9", "#10b981"]; // Original colors for light mode

    interface Slide {
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      speed: number;
      opacity: number;
      direction: number;
    }

    // Clear existing slides and create new ones
    slides.length = 0;
    for (let i = 0; i < 15; i++) {
      createSlide();
    }

    function createSlide() {
      const width = Math.random() * 120 + 80;
      const height = width * 0.6;
      const x = Math.random() * (canvas!.width - width);
      const y = Math.random() * (canvas!.height - height);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const speed = Math.random() * 0.5 + 0.2;
      const opacity =
        theme === "dark"
          ? Math.random() * 0.4 + 0.2
          : Math.random() * 0.3 + 0.1;
      const direction = Math.random() > 0.5 ? 1 : -1;

      slides.push({ x, y, width, height, color, speed, opacity, direction });
    }

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      slides.forEach((slide, index) => {
        // Draw slide
        ctx!.globalAlpha = slide.opacity;
        ctx!.fillStyle = slide.color;
        ctx!.fillRect(slide.x, slide.y, slide.width, slide.height);

        // Draw slide content lines
        ctx!.fillStyle = theme === "dark" ? "#e5e7eb" : "#ffffff";
        for (let i = 0; i < 3; i++) {
          ctx!.fillRect(
            slide.x + 10,
            slide.y + 10 + i * 10,
            slide.width * 0.7,
            3
          );
        }

        // Move slide
        slide.y += slide.speed * slide.direction;

        // Bounce or reset
        if (slide.y <= 0 || slide.y + slide.height >= canvas!.height) {
          slide.direction *= -1;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-[400px] md:h-[500px] rounded-lg shadow-xl dark:shadow-gray-900/50 bg-gray-50 dark:bg-gray-800"
    />
  );
}
