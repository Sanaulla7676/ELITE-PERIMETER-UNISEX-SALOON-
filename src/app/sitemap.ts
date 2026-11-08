import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { categories, services, packages } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/", "/services/", "/packages/", "/blog/",
    "/location/ullal/", "/about/", "/contact/",
  ];
  const categoryRoutes = categories.map((category) => `/services/${category.slug}/`);
  const serviceRoutes = services
    .filter((service) => !service.verifyBeforePublishing)
    .map((service) => `/services/${service.category}/${service.slug}/`);
  const packageRoutes = packages.map((item) => `/packages/${item.slug}/`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}/`);

  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes, ...packageRoutes, ...blogRoutes].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? ("monthly" as const) : ("yearly" as const),
    priority:
      path === "/" ? 1 :
      path === "/services/" || path === "/blog/" || path === "/packages/" ? 0.9 :
      path.startsWith("/services/") && categories.some((category) => path === `/services/${category.slug}/`) ? 0.85 :
      path.startsWith("/blog/") || path.startsWith("/packages/") ? 0.7 :
      0.75,
  }));
}
