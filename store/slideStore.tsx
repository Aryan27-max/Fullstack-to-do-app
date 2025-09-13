import { Slide } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";


 interface SlideState {
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
}
 
export const slideStore = create<SlideState>()(
  persist<SlideState>(
    (set) => ({
      slides: [],
      setSlides: (slides: Slide[]) => set({ slides }),
    }),
    {
      name: "slide-storage",
    }
  )
);
