import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

function HomePage() {
  return (
    <>
      <ProductList title="New Arrivals" data={sampleData.products} />
    </>
  );
}

export default HomePage;
