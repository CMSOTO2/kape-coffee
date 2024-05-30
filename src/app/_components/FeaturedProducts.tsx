import React from "react";
import { CarouselSize } from "./CarouselSize";

export default function FeaturedProducts() {
  return (
    <section className="bg-kape-gray py-4">
      <div className="m-auto max-w-[1440px] text-blue-300">
        <h2 className="mb-4 text-center text-5xl">Featured Products</h2>
        <CarouselSize />
      </div>
    </section>
  );
}
