import React from "react";

const CommonPageTemplate = ({
  children,
  title,
  description,
}: {
  children: any;
  title?: string;
  description?: string;
}) => {
  return (
    <section className="min-h-screen bg-kape-beige pb-10">
      <div className="mx-auto max-w-[1440px] px-10 text-center">
        <div className="mb-10 pt-16 text-center">
          <h1 className="text-center text-3xl font-bold uppercase text-kape-black md:text-4xl ">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-[70%] text-sm md:text-base">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default CommonPageTemplate;
