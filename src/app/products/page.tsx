import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products | Kape",
  description:
    "Elevate your coffee experience at home - Browse our selection of premium coffee beans, brewing equipment, and accessories at Kape Coffee Co.",
};

const Products = () => {
  return (
    <section className="min-h-screen bg-kape-beige pb-10">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="pt-10 text-center text-3xl font-bold uppercase text-kape-black md:text-7xl">
          Products
        </h1>
      </div>
    </section>
  );
};

export default Products;
