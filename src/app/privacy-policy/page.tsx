import React from "react";
import Privacy from "../../lib/content/privacy-policy.mdx";

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
