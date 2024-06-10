import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section className="min-h-screen bg-kape-beige pb-10">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="pt-10 text-center text-5xl text-kape-black md:text-7xl">
          Menu
        </h1>
        <Image
          className="mx-auto mt-4"
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
