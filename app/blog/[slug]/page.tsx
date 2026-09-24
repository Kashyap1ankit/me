"use client";
import { getBlogs } from "@/app/actions/storage";
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
      const text = await getBlogs();
      console.log("fetched now");
      setRes(text);
    }

    fn();
  }, []);

  return <Editor readOnly={true} markDownText={`${res}`} />;
}
