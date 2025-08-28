import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedDate: z.coerce.date(),
      author: z.string(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  posts,
};
