import ProductForm from "@/components/admin/product-form";
import { getProductById } from "@/lib/actions/product";
import { PageProps } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Update Product",
};

type Props = PageProps<
  {
    id: string;
  },
  void
>;

async function AdminProductUpdatePage({ params }: Props) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) return notFound();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update Product</h1>

      <ProductForm type="Update" product={product} productId={product.id} />
    </div>
  );
}

export default AdminProductUpdatePage;
