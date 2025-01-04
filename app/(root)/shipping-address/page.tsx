import { Metadata } from "next";
import ShippingAddressForm from "./shipping-address-form";
import { getMyCart } from "@/lib/actions/cart";
import { auth } from "@/auth";
import { getUserById } from "@/lib/actions/users";
import { redirect } from "next/navigation";
import { ShippingAddress } from "@/types";
import CheckoutSteps from "@/components/shared/checkout-steps";

export const metadata: Metadata = {
  title: "Shipping Address",
};

async function ShippingAddressPage() {
  const cart = await getMyCart();
  if (!cart || cart.items.length === 0) {
    redirect("/cart");
  }

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("No user ID");
  }

  const user = await getUserById(userId);

  return (
    <>
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
}

export default ShippingAddressPage;
