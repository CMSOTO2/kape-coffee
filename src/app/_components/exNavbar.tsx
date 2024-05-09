"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ContentType {
  logo: {
    filename: string;
    alt: string;
  };
  navList: string[];
}

export default function Navbar({ content }: { content: ContentType }) {
  const { logo, navList } = content;

  return (
    <header>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between p-4">
        <Image
          src={logo.filename}
          alt={logo.alt}
          width={100}
          height={100}
          priority
          className="h-auto"
        />
        <ul className="flex flex-col gap-4 text-white md:flex-row">
          {navList.map((listItem: string) => {
            return (
              <li key={listItem}>
                <Link href="#">{listItem}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
