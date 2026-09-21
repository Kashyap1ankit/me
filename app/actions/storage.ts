"use server";

import { put, get, list } from "@vercel/blob";
import { randomUUID } from "crypto";

export async function tryout(text: string, id: number) {
  const blob = await put(`blog/${id}`, text, {
    access: "public",
  });
}

export async function uploadImage(File: any) {
  const blob = await put(`image/${randomUUID()}`, File, {
    access: "public",
  });

  return blob.url;
}

export async function getBlogs() {
  const listOfBlobs = await list({
    limit: 1000,
    prefix: "blog/",
  });

  console.log("all blogs");
}
