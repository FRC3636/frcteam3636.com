import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import { manifest } from "./utils/seo";

// https://astro.build/config
export default defineConfig({
    integrations: [
        // sentry({
        //     dsn: "https://d9846d5e2c53aec80163141f77a9cabb@o1106499.ingest.sentry.io/4506118179586048",
        //     sourceMapsUploadOptions: {
        //         project: "frc3636-web",
        //         authToken: process.env.SENTRY_AUTH_TOKEN,
        //     },
        // }),
    ],
    site: "https://frcteam3636.com",
    vite: {
        plugins: [
            VitePWA({
                manifest,
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
    experimental: {
        svg: true,
    },
});
