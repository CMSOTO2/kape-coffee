"use client";

import { useProducts } from "@/app/hooks/useProducts";
import ProductItem from "@/components/ProductItem";
import { SkeletonCard } from "@/components/shadui/skeleton-card";
import { ChevronDown } from "lucide-react";

export default function ProductsComponent() {
  const { isLoading, isError, data } = useProducts();

  return (
    <>
      {isError && <p>error</p>}
      {isLoading && (
        <div className=" mx-auto flex flex-col items-center gap-10 text-left md:grid md:grid-cols-2 lg:grid-cols-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      {data && (
        <>
          <div className="mb-4 flex justify-between font-bold">
            <span>{data.length} Items</span>
            <div className="flex items-center gap-2">
              <span>Trending</span>
              <ChevronDown />
            </div>
          </div>
          <div className=" mx-auto flex flex-col items-center gap-10 text-left md:grid md:grid-cols-2 lg:grid-cols-3">
            {data?.map((productData: any) => (
              <div className="mx-auto h-full" key={productData.id}>
                <ProductItem key={productData.id} product={productData} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
