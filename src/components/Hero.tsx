import React from "react";

export default function Hero() {
  return (
    <section className="relative top-0 flex items-center justify-center">
      <div className="z-10 flex h-[70vh] max-h-[700px] min-h-[500px] w-full items-center justify-center">
        {/* TODO: wait for kape team to confirm text */}
        {/* <h1 className="absolute z-10 text-center text-7xl font-medium text-kape-beige">
          Modern Coffee.
        </h1> */}
        <video
          src="/kape-hero-video-compressed.mp4"
          autoPlay
          loop
          muted={true}
          className="h-full w-full object-cover"
          aria-label="Coffee beans flying"
          playsInline
        />
      </div>
    </section>
  );
}
