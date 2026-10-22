"use server";

import { put, get, list } from "@vercel/blob";
import { randomUUID } from "crypto";
import { unstable_cache, revalidateTag } from "next/cache";

export async function tryout(text: string) {
  await put(`blog/${randomUUID()}`, text, {
    access: "public",
  });

  revalidateTag("blogs");
}

export async function uploadImage(file: File) {
  const blob = await put(`image/${randomUUID()}`, file, {
    access: "public",
  });

  return blob.url;
}

export const getAllBlogs = unstable_cache(
  async () => {
    const { blobs } = await list({
      limit: 1000,
      prefix: "blog/",
    });

    return blobs;
  },
  ["all-blogs"],
  {
    revalidate: 3600,
    tags: ["blogs"],
  },
);

export const getBlogWithId = unstable_cache(
  async (id: string) => {
    const blog = await get(`blog/${id}`, {
      access: "public",
    });

    if (!blog) return null;

    const response = await fetch(blog.blob.url);

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${id}`);
    }

    return response.json();
  },
  ["blog-content"],
  {
    revalidate: 3600,
    tags: ["blogs"],
  },
);
