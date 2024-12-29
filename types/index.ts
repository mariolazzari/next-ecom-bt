import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};

export type ActionResponse = Promise<{
  success: boolean;
  message: string;
}>;
