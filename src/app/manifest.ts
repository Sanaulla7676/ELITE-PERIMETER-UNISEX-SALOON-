import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elite Perimeter Unisex Salon",
    short_name: "Elite Perimeter",
    description: "Unisex beauty parlour on Ullal Main Road, Bengaluru.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f4ed",
    theme_color: "#4a293d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
