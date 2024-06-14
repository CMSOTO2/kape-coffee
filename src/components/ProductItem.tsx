import Image from "next/image";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import AddToCartButton from "./AddToCartButton";

const ProductItem = ({
  product,
  showLoader,
}: {
  product?: any;
  showLoader?: boolean;
}) => {
  const { checkoutSingleItem } = useShoppingCart();

  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-[4px] `}>
      <div className="relative min-h-[250px] w-full">
        <Image
          src={product.images?.[0]}
          alt={product.name}
          quality={100}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex h-full flex-col bg-kape-black p-5 text-left text-white">
        <h2 className="text-[1.5rem] font-semibold">{product.name}</h2>
        <p className="mb-5 mt-4 min-h-[3rem] text-[1rem]">
          {product.description}
        </p>
        <p className="mt-auto pt-4 text-[1.5rem] font-bold">
          ${(product.price / 100).toFixed(2)}
        </p>

        {/* <button onClick={() => checkoutSingleItem(product.default_price)}>
          Buy now
        </button> */}
      </div>
      <div>
        <AddToCartButton
          currency="USD"
          description={product.description}
          name={product.name}
          image={product.images[0]}
          price={product.price}
          // default_price is priceAPI needed to get to checkout
          id={product.default_price}
        />
      </div>
    </div>
  );
};

export default ProductItem;
