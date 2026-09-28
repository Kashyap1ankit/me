"use server";

import { put, get, list } from "@vercel/blob";
import { randomUUID } from "crypto";

export async function tryout(text: string, id: number) {
  await put(`blog/${id}`, text, {
    access: "public",
  });
}

export async function uploadImage(file: File) {
  const blob = await put(`image/${randomUUID()}`, file, {
    access: "public",
  });

  return blob.url;
}

export async function getAllBlogs() {
  const listOfBlobs = await list({
    limit: 1000,
    prefix: "blog/",
  });

  return listOfBlobs.blobs;
}

export async function getBlogWithId(id: number) {
  const blogWithId = await get(`blog/${id}`, {
    access: "public",
  });

  if (!blogWithId) return null;

  const res = await fetch(blogWithId.blob.url);

  const text = await res.json();
  console.log("Response", text);
  return text;
}
