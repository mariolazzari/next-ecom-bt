import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(n: number): string {
  const [int, dec] = n.toString().split(".");

  return dec ? `${int}.${dec.padEnd(2, "0")}` : `${int}.00`;
}
