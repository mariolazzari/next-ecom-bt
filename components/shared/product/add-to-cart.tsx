"use client";

import { CartItem } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

type Props = {
  item: CartItem;
};

function AddToCart({ item }: Props) {
  const router = useRouter();
  const { toast } = useToast();

  const onButtonClick = async () => {
    const { success, message } = await addItemToCart(item);
    if (!success) {
      return toast({ variant: "destructive", description: message });
    }

    toast({
      variant: "default",
      description: `${item.name} added to cart`,
      action: (
        <ToastAction altText="Go to cart" onClick={() => router.push("/cart")}>
          Go to Cart
        </ToastAction>
      ),
    });
  };

  return (
    <Button className="w-full" type="button" onClick={onButtonClick}>
      <Plus /> Add To Cart
    </Button>
  );
}

export default AddToCart;
