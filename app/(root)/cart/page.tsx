import { Metadata } from "next";

import { getMyCart } from "@/lib/actions/cart";

import CartTable from "./cart-table";

export const metadata: Metadata = {
  title: "Cart",
};

async function CartPage() {
  const cart = await getMyCart();

  return (
    <>
      <CartTable cart={cart} />
    </>
  );
}

export default CartPage;
