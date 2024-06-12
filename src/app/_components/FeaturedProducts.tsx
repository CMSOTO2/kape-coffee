import React from "react";
import { CarouselSize } from "./CarouselSize";

export default function FeaturedProducts() {
  return (
    <section className="bg-kape-beige py-4">
      <div className="m-auto max-w-[1440px] text-kape-black">
        <h2 className="mb-4 text-center text-5xl">Products</h2>
        <CarouselSize />
      </div>
    </section>
  );
}
