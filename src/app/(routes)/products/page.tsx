import { Metadata } from "next";
import React from "react";
import CommonPageTemplate from "@/components/CommonPageTemplate";
import ProductsComponent from "@/components/products";

export const metadata: Metadata = {
  title: "Products | Kape",
  description:
    "Elevate your coffee experience at home - Browse our selection of premium coffee beans, brewing equipment, and accessories at Kape Coffee Co.",
};

const Products = () => {
  return (
    <CommonPageTemplate title="Products">
      <ProductsComponent />
    </CommonPageTemplate>
  );
};

export default Products;
