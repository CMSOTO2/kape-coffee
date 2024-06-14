"use client";

import { Metadata } from "next";
import React from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductItem from "@/components/ProductItem";
import { FaChevronDown } from "react-icons/fa";
import { SkeletonCard } from "@/components/shadui/skeleton-card";
import CommonPageTemplate from "@/components/CommonPageTemplate";

// export const metadata: Metadata = {
//   title: "Products | Kape",
//   description:
//     "Elevate your coffee experience at home - Browse our selection of premium coffee beans, brewing equipment, and accessories at Kape Coffee Co.",
// };

const Products = () => {
  const { isLoading, isError, data } = useProducts();
  console.log(data);

  return (
    <CommonPageTemplate
      title="Products"
      description={
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, consequatur?"
      }
    >
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
              <FaChevronDown />
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
    </CommonPageTemplate>
  );
};

export default Products;
