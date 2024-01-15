import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollTo(top: number = 0, left: number = 0): void {
  window.scroll({
    top,
    left,
    behavior: "smooth",
  })
}