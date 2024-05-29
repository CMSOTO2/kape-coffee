"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

interface ProductsType {
  id: string;
  active: boolean;
  name: string;
  description: string;
  images: string[];
  price: number;
  currency: "usd";
}

export default function Hero() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["product-list"],
    queryFn: () => fetch("/api/products"),
    enabled: true,
  });

  if (isLoading) {
    return "...loading";
  }
  if (isError) {
    return "error";
  }
  return (
    <div className="min-h-screen text-white">
      {data?.data?.map((product: ProductsType) => {
        return <div>{product.name}</div>;
      })}
      <button>
        <a
          href="https://buy.stripe.com/test_4gwdR06529myd209AA"
          target="_blank"
        >
          Coffee Beans
        </a>
      </button>
    </div>
  );
}
