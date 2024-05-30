"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useProducts } from "../hooks/useProducts";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CarouselSize() {
  const { isLoading, isError, data } = useProducts();

  if (isLoading) {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <SkeletonCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }
  if (isError) {
    return <div className="text-white">error</div>;
  }
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data?.map((product) => (
          <CarouselItem
            key={product.id}
            className="min-w-[350px] max-w-[450px] flex-grow bg-kape-gray sm:basis-1/2 lg:basis-1/3"
          >
            <Card className="h-full">
              <CardContent className="relative flex flex-col items-center justify-center">
                <div className="h-[350px] w-full object-cover">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    quality={100}
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="z-10 -mt-2 flex h-full w-full flex-col gap-3 rounded-t-2xl bg-white p-3 text-center">
                  <h2 className="text-[1.5rem] font-semibold">
                    {product.name}
                  </h2>
                  <p className="min-h-[3rem] text-[1rem]">
                    {product.description}
                  </p>
                  <p className="text-[2rem] font-bold">
                    ${(product.price / 100).toFixed(2)}
                  </p>
                  <Button className="w-full self-end bg-kape-green">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
