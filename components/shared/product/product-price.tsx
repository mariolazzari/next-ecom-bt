import { cn } from "@/lib/utils";

function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const stringValue = value.toFixed(2);
  const [intValue, floatvalue] = stringValue.split(".");

  return (
    <div className={cn("text-2xl", className)}>
      <span>${intValue}</span>
      <span className="text-xs align-super">.{floatvalue}</span>
    </div>
  );
}

export default ProductPrice;
