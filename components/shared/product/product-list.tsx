import { Product } from "@/types";
import ProductCard from "./product-card";

type Props = {
  data: Product[];
} & Partial<{
  title: string;
  limit: number;
}>;

function ProductList({ data, title = "", limit }: Props) {
  const limited = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limited.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limited.map(prod => (
            <ProductCard key={prod.slug} product={prod} />
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;
