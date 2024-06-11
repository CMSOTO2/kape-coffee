import React from "react";
import Privacy from "../../lib/content/privacy-policy.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kape",
  description: "Protecting Your Privacy at Kape Coffee Co.",
};

const PrivacyPolicy = () => {
  return (
    <section className="bg-kape-beige py-10">
      <div className="prose mx-auto max-w-[1440px]">
        <Privacy />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
