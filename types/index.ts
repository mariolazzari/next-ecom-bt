import { z } from "zod";
import {
  cartItemSchema,
  insertCartSchema,
  insertOrderSchema,
  insertProductSchema,
  paymentMethodSchema,
  paymentResultSchema,
  shippingAddressSchema,
} from "@/lib/validators";
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

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;

export type ShippingAddress = z.infer<typeof shippingAddressSchema>;

export type PaymentMethod = z.infer<typeof paymentMethodSchema>;

export type Order = z.infer<typeof insertOrderSchema> & {
  id: string;
  createdAt: Date;
  isPaid: Boolean;
  paidAt: Date | null;
  isDelivered: Boolean;
  deliveredAt: Date | null;
  orderitems: OrderItem[];
  user: {
    name: string;
    email: string;
  };
  paymentResult: PaymentResult;
};
export type OrderItem = z.infer<typeof cartItemSchema>;

export type PaymentResult = z.infer<typeof paymentResultSchema>;
