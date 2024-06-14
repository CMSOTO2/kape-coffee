import CommonPageTemplate from "@/components/CommonPageTemplate";
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
    <CommonPageTemplate title="Menu">
      <Image
        className="mx-auto mt-10"
        src="/kape-menu.png"
        alt="kape menu"
        width={400}
        height={600}
      />
    </CommonPageTemplate>
  );
};

export default Menu;
