import { UseQueryResult, useQuery } from "@tanstack/react-query";

interface ProductsType {
  id: string;
  active: boolean;
  name: string;
  description: string;
  images: string[];
  price: number;
  currency: "usd";
}

export const useProducts = (): UseQueryResult<ProductsType[]> => {
  return useQuery({
    queryKey: ["product-list"],
    queryFn: async () => await fetch("/api/products").then((res) => res.json()),
    enabled: true,
  });
};
