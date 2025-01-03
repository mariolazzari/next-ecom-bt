import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(n: number | string): string {
  const nStr = n === "str" ? n : n.toString();
  const [int, dec] = nStr.split(".");

  return dec ? `${int}.${dec.padEnd(2, "0")}` : `${int}.00`;
}

// Format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  if (error.name === "ZodError") {
    // Handle Zod error
    const fieldErrors = Object.keys(error.errors).map(
      field => error.errors[field].message
    );

    return fieldErrors.join(". ");
  } else if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    // Handle Prisma error
    const field = error.meta?.target ? error.meta.target[0] : "Field";
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else {
    // Handle other errors
    return typeof error.message === "string"
      ? error.message
      : JSON.stringify(error.message);
  }
}

export function round2(value: string | number) {
  switch (typeof value) {
    case "string":
      return (Math.round(Number(value) + Number.EPSILON) * 100) / 100;

    case "number":
      return (Math.round(value + Number.EPSILON) * 100) / 100;

    default:
      throw new Error("Invalid value");
  }
}

const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 2,
});

// Format currency using the formatter above
export function formatCurrency(amount: number | string | null) {
  switch (typeof amount) {
    case "number":
      return CURRENCY_FORMATTER.format(amount);

    case "string":
      return CURRENCY_FORMATTER.format(+amount);

    default:
      return "NaN";
  }
}
