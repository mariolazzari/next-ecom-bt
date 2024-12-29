import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";
import { PropsWithChildren } from "react";

export type Layout = Readonly<PropsWithChildren>;

type Params = Record<string, string> | void;

export type PageProps<
  TParams extends Params,
  TSearch extends Params
> = Readonly<{
  params: Promise<TParams>;
  searchParams: Promise<TSearch>;
}>;

export type ActionResponse = Promise<{
  success: boolean;
  message: string;
}>;

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};
