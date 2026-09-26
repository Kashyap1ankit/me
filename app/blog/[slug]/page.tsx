"use client";
import { getBlogWithId } from "@/app/actions/storage";
import Editor from "@/components/blog/editor";
import { use, useEffect, useState } from "react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [res, setRes] = useState("");

  useEffect(() => {
    async function fn() {
      const text = await getBlogWithId(Number(slug));
      if (!text) return ``;

      setRes(text);
    }

    fn();
  }, []);

  return <Editor readOnly={true} markDownText={`${res}`} />;
}
