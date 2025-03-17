import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const events = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/events" }),
    schema: z.object({
        name: z.string(),
        date: z.date({ coerce: true }),
        location: z.object({
            name: z.string(),
            coordinates: z.string(),
        }),
        links: z.object({
            tba: z.string(),
            first: z.string().optional(),
        }),
    }),
});

export const collections = { events };