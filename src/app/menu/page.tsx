import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Menu | Kape",
  description:
    "Discover our enticing coffee menu at Kape Coffee Co. - Explore handcrafted espresso drinks, brewed coffee, and delectable pastries. Your taste buds will thank you!",
};

const Menu = () => {
  return (
    <section className="min-h-screen bg-kape-beige pb-10">
      <div className="mx-auto max-w-[1440px] px-4">
        <h1 className="pt-10 text-center text-3xl font-bold uppercase text-kape-black md:text-7xl">
          Menu
        </h1>
        <Image
          className="mx-auto mt-10"
          src="/kape-menu.png"
          alt="kape menu"
          width={400}
          height={600}
        />
      </div>
    </section>
  );
};

export default Menu;
