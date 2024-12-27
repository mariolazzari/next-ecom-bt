import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    val => /^\d+(\.\d{2})?/.test(formatNumberWithDecimal(+val)),
    "Price must have two decimals"
  );

export const insterProductSchema = z.object({
  name: z.string().min(3, "Name must be at lest 3 characters"),
  slug: z.string().min(3, "Slug must be at lest 3 characters"),
  category: z.string().min(3, "Category must be at lest 3 characters"),
  brand: z.string().min(3, "Brand must be at lest 3 characters"),
  description: z.string().min(3, "Description must be at lest 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean().default(false),
  banner: z.string().nullable(),
  price: currency,
});
