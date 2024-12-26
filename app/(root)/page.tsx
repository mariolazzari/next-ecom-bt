import { getLatestProducts } from "@/lib/actions/product";
import ProductList from "@/components/shared/product/product-list";

async function HomePage() {
  const lastProds = await getLatestProducts();

  return (
    <>
      <ProductList title="New Arrivals" data={lastProds} />
    </>
  );
}

export default HomePage;
