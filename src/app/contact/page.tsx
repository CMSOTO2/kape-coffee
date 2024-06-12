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
    <section className="min-h-screen bg-kape-beige pb-1">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center px-4">
        <h1 className="pt-10 text-center text-5xl text-kape-black md:text-7xl">
          Contact Us
        </h1>
        <div className="mt-10 overflow-hidden rounded-xl">
          <Image
            src="/contact-us.jpg"
            alt="Kape crew picture"
            width={1000}
            height={600}
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
      </div>
    </section>
  );
};

export default Contact;
