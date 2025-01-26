import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBasePath() {
  if (process.env.NODE_ENV === "development") {
    return ""
  }
  return "/OneXengine.Media"
}

export function getFullPath(path: string) {
  return `${getBasePath()}${path}`
}

