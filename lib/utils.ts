import { clsx, type ClassValue } from "clsx";

/**
 * Merge conditional class names. Kept intentionally simple (no
 * tailwind-merge dependency) to minimize the dependency surface, per the
 * project's security/performance guidance to avoid unnecessary libraries.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
