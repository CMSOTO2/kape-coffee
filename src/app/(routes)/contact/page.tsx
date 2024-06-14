import CommonPageTemplate from "@/components/CommonPageTemplate";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Kape",
  description:
    "Connect with Kape Coffee Co. today! - Find our location, explore contact options, or leave a message. We're here to answer your questions.",
};

const Contact = () => {
  return (
    <CommonPageTemplate title="Contact">
      <div className="relative mx-auto mt-10 h-[500px] w-[400px] overflow-hidden rounded-xl ">
        <Image
          src="/contact-us.jpg"
          alt="Kape crew picture"
          className="object-cover"
          fill
        />
      </div>
      <p className="mt-10">
        Want to chat about coffee? Have any questions about our service or
        products?
      </p>
      <p>
        Feel free to connect with us via email at{" "}
        <a href="mailto:Kapecolumbus@gmail.com">Kapecolumbus@gmail.com</a>
      </p>
    </CommonPageTemplate>
  );
};

export default Contact;
