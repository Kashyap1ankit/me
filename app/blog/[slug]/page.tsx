"use client";
import { getBlogWithId } from "@/app/actions/storage";
import Editor from "@/components/blog/editor";
import { hanken } from "@/public/font";
import { use, useEffect, useState } from "react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [res, setRes] = useState({});

  useEffect(() => {
    async function fn() {
      const text = await getBlogWithId(Number(slug));
      if (!text) return ``;

      setRes(text);
    }

    fn();
  }, []);

  return (
    <div>
      <p className={`${hanken.className} text-3xl text-black font-bold`}>
        {res.title}
      </p>

      {/* <div className="flex flex-row items-center justify-start gap-x-2">
        <HugeiconsIcon icon={Calendar03Icon} size={12} />
        <p className={`${hanken.className} text-xs`}>{date.toLocaleString()}</p>
      </div> */}

      <Editor readOnly={true} markDownText={`${res.description}`} />
    </div>
  );
}
