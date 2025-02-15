import { ROUTES } from "@/lib/constants";
import Image from "next/image";
import { Link } from "next-view-transitions";
import React from "react";

export default function Footer() {
  return (
    <footer className="bottom-0 bg-kape-green px-4 font-bold text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col">
        <div className="pt-12 lg:flex lg:justify-between lg:gap-4">
          {/* Brand Container */}
          <div className="mb-12 flex flex-col items-center">
            <Image
              src="/kape-logo.svg"
              alt={"Kape Cafe Logo"}
              className="mb-6"
              loading="lazy"
              width={108}
              height={96}
            />
            <p className="text-center text-sm">Asian-Inspired Cafe in Ohio</p>
          </div>
          <div>
            <div className="lg:flex lg:gap-20">
              <div className="mb-12 flex flex-col items-center gap-8 whitespace-nowrap text-base lg:flex-row">
                <Link href={ROUTES.CONTACT}>Contact</Link>
              </div>
              {/* Socials Container */}
              <div className="mb-12 flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/kapecoffee.co/"
                  target="_blank"
                  className="lg:hover:scale-110"
                >
                  <Image
                    src="/instagram-circle-logo.svg"
                    alt={"Link to Kape Instagram"}
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            </div>
            {/* Locations Container */}
            {/* <div className="flex flex-col items-center gap-8 text-lg lg:flex-row lg:gap-16">
              <div className="lg:hover:scale-110">
                <a
                  href="https://maps.app.goo.gl/e4L15S1j2aeWHxhS7"
                  className="flex items-center justify-center"
                  target="_blank"
                >
                  <span>
                    FRI. 8a-1p @ The Branch
                    <span className="flex justify-center gap-2 lg:justify-start">
                      <Image
                        src="/location-on.svg"
                        alt={"FRI. 8a-1p @ The Branch google map link"}
                        width={20}
                        height={20}
                      />
                      1636 Oak St
                    </span>
                  </span>
                </a>
              </div>
              <div className="lg:hover:scale-110">
                <a
                  href="https://maps.app.goo.gl/bbg3J73qGFx3Gh697"
                  className="flex justify-center lg:justify-start"
                  target="_blank"
                >
                  <span>
                    SAT. 9a-3p @ Leisure Club
                    <span className="flex justify-center gap-2 lg:justify-start">
                      <Image
                        src="/location-on.svg"
                        alt={"SAT. 9a-3p @ Leisure Club google map link"}
                        width={20}
                        height={20}
                      />
                      1610 Oak St
                    </span>
                  </span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
        {/* Privacy Policy Container */}
        <div className="flex flex-col gap-4 border-t-[1px] border-t-white border-opacity-10 py-8 text-center text-sm lg:flex-row lg:justify-between lg:gap-0">
          <Link href={ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>
          <p>&copy; 2025 Kape Coffee - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
