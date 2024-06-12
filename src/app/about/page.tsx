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
    <section className="min-h-screen bg-kape-beige pb-10">
      <div className="mx-auto max-w-[1440px] px-4">
        <h1 className="pt-10 text-center text-5xl text-kape-black md:text-7xl">
          About Us
        </h1>
        <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center gap-4">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/kape-crew2.jpg"
              alt="Kape crew picture"
              width={1000}
              height={600}
            />
          </div>

          <p className="px-4 text-xl">
            Our team wanted to start Kape to share a simple expression: our
            mutual love for coffee. While nostalgic tasting notes from our
            childhood are woven within our speciality drinks, our unspoken rule
            is to also service and build each drink from a prime foundation that
            is great tasting coffee. When one open door led to another, we
            currently offer our menu selection to the public at Leisure Club per
            Saturday. We hope to share this narrative to any and all who walk
            through those doors.
          </p>
          <p>Thanks for stopping by. Yours truly, Kape Coffee</p>
        </div>
      </div>
    </section>
  );
};

export default About;
