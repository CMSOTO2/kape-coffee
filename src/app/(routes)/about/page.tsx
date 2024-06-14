import CommonPageTemplate from "@/components/CommonPageTemplate";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About | Kape",
  description:
    "Uncover the story behind Kape Coffee Co. - Learn about our passion for coffee, commitment to quality, and dedication to creating a welcoming atmosphere.",
};

const About = () => {
  return (
    <CommonPageTemplate title="About Us">
      <div className="relative mx-auto h-[600px] w-auto overflow-hidden rounded-xl">
        <Image
          src="/kape-crew2.jpg"
          alt="Kape crew picture"
          className="object-cover"
          fill
        />
      </div>

      <p className="px-4 text-xl">
        Our team wanted to start Kape to share a simple expression: our mutual
        love for coffee. While nostalgic tasting notes from our childhood are
        woven within our speciality drinks, our unspoken rule is to also service
        and build each drink from a prime foundation that is great tasting
        coffee. When one open door led to another, we currently offer our menu
        selection to the public at Leisure Club per Saturday. We hope to share
        this narrative to any and all who walk through those doors.
      </p>
      <p>Thanks for stopping by. Yours truly, Kape Coffee</p>
    </CommonPageTemplate>
  );
};

export default About;
