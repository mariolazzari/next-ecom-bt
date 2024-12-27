"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
};

function ProduceImages({ images }: Props) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        className="min-h-[300px] object-cover object-center"
        src={images[current]}
        alt="Product image"
        width={1000}
        height={1000}
      />

      <div className="flex">
        {images.map((img, idx) => (
          <div
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              current === idx && "border-orange-500"
            )}
            key={img}
            onClick={() => setCurrent(idx)}
          >
            <Image src={img} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProduceImages;
