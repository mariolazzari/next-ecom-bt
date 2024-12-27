import { getLatestProducts } from "@/lib/actions/product";
import ProductList from "@/components/shared/product/product-list";
import { Product } from "@/types";

async function HomePage() {
  const lastProds: Product[] = await getLatestProducts();

  return (
    <>
      <ProductList title="New Arrivals" data={lastProds} />
    </>
  );
}

export default HomePage;
