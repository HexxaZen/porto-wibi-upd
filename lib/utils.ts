import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility untuk menggabungkan className dengan aman.
 * Menggabungkan hasil dari clsx() dan tailwind-merge()
 * agar tidak ada class Tailwind yang bertabrakan.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
