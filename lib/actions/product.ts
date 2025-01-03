"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import { Product } from "@/types";

export async function getLatestProducts() {
  const data: Product[] = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject<Product[]>(data);
}

export async function getProductBySlug(slug: string) {
  const prod = await prisma.product.findFirst({
    where: {
      slug,
    },
  });

  return prod;
}
