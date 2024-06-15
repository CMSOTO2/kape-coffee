import { basePath } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/products", "/api/webhook"],
    },
    sitemap: `${basePath}/sitemap.xml`,
  };
}
