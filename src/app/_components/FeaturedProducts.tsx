"use client";

import { SkeletonCard } from "@/components/ui/skeleton-card";
import Image from "next/image";
import React from "react";
import { useProducts } from "../hooks/useProducts";

export default function FeaturedProducts() {
  const { isLoading, isError, data } = useProducts();

  if (isLoading) {
    return <SkeletonCard />;
  }
  if (isError) {
    return <div className="text-white">error</div>;
  }
  return (
    <section>
      <div className="text-blue-300">
        {data?.map((product) => {
          return (
            <div key={product.id}>
              <h1 className="text-4xl">{product.name}</h1>
              <h2>price ${(product.price / 100).toFixed(2)}</h2>
              <Image
                src={product.images[0]}
                alt={product.description}
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
