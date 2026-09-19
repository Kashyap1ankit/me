"use server";

import { put } from "@vercel/blob";
import { randomUUID } from "crypto";

export async function tryout(text: string, id: number) {
  const blob = await put(`blog/${id}`, text, {
    access: "private",
  });
}

export async function uploadImage(File: any) {
  const blob = await put(`image/${randomUUID()}`, File, {
    access: "private",
  });
  return blob.url;
}
