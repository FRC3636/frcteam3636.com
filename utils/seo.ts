// Type imports
import type { ManifestOptions } from "vite-plugin-pwa";

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
    baseURL: "https://3636.team", // Change this to your production URL.
    description: "The Official Website of Generals Robotics", // Change this to be your website's description.
    type: "website",
    image: {
        url: "/maskable_icon_x512.png",
        alt: "",
        width: 512,
        height: 512,
    },
    siteName: "Generals Robotics 3636", // Change this to your website's name,
};
export const manifest: Partial<ManifestOptions> = {
    name: seoConfig.siteName, // Change this to your website's name.
    short_name: seoConfig.siteName, // Change this to your website's short name.
    description: seoConfig.description, // Change this to your websites description.
    theme_color: "#1d48a3", // Change this to your primary color.
    background_color: "#0a0a0a", // Change this to your background color.
    icons: [
        // https://maskable.app/editor
        {
            src: "/maskable_icon.png",
            sizes: "2430x2430",
            type: "image/png",
            purpose: "any maskable",
        },
        {
            src: "/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
        },
        {
            src: "/maskable_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
        },
        {
            src: "/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
        },
        {
            src: "/maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable",
        },
        {
            src: "/maskable_icon_x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable",
        },
    ],
};
