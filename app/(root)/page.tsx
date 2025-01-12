import { getFeaturedProducts, getLatestProducts } from "@/lib/actions/product";
import ProductList from "@/components/shared/product/product-list";
import { Product } from "@/types";
import ProductCarousel from "@/components/shared/product/product-carousel";

async function HomePage() {
  const lastProds: Product[] = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList title="New Arrivals" data={lastProds} limit={4} />
    </>
  );
}

export default HomePage;
