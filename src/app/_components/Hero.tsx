"use client";

import React from "react";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { useProducts } from "../hooks/useProducts";

export default function Hero() {
  const { isLoading, isError, data } = useProducts();

  if (isLoading) {
    return <SkeletonCard />;
  }
  if (isError) {
    return <div className="text-white">error</div>;
  }
  return (
    <div className="text-white">
      {data?.map((product) => {
        return (
          <div key={product.id}>
            <h1 className="text-4xl">{product.name}</h1>
            <h2>price ${(product.price / 100).toFixed(2)}</h2>
            <img src={product.images[0]} alt={product.description} />
          </div>
        );
      })}
    </div>
  );
}
