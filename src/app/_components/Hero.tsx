import React from "react";

export default function Hero() {
  return (
    <section className="relative flex w-full items-center justify-center ">
      <div className="flex aspect-video h-full w-full items-center justify-center bg-black opacity-70">
        <h1 className="absolute z-10 text-center text-7xl font-medium text-blue-600">
          Modern Coffee.
        </h1>
        <iframe
          src="https://www.youtube.com/embed/MBf-W41H1es?enablejsapi=1&autoplay=1&mute=1&modestbranding=1&playlist=MBf-W41H1es&controls=0&fs=0&loop=1&showinfo=0&origin=https://watchhouse.com"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Website banner"
          className="h-full w-full border-0"
          allowFullScreen={false}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
