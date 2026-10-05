"use client";
import { getBlogWithId } from "@/app/actions/storage";
import Editor from "@/components/blog/editor";
import { hanken, manrope } from "@/public/font";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { use, useEffect, useState } from "react";
import { toast } from "@/components/ui/toast";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState({});

  useEffect(() => {
    async function fn() {
      try {
        setLoading(true);
        const text = await getBlogWithId(slug);
        if (!text) return ``;

        setRes(text);
      } catch (error) {
        toast.add({
          type: "error",
          title: "Error occured",
        });
      } finally {
        setLoading(false);
      }
    }

    fn();
  }, []);

  if (loading) return <div>Hi</div>;

  return (
    <div className="mx-4 flex flex-col gap-y-4">
      <p className={`${manrope.className} mt-2  text-5xl text-black font-bold`}>
        {res.title}
      </p>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-start gap-x-4 ">
          {res?.tag?.map((e: string, i: number) => {
            return (
              <p
                key={i}
                className={`${hanken.className} text-xs text-gray-600 py-1 px-2 bg-gray-200 rounded-sm `}
              >
                #{e.label}
              </p>
            );
          })}
        </div>

        <div className="flex flex-row items-center justify-start gap-x-2">
          <HugeiconsIcon
            icon={Calendar03Icon}
            size={18}
            className="text-black dark:text-white"
          />
          <p className={`${hanken.className} text-sm text-gray-500`}>
            {new Date(res?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <Editor readOnly={true} markDownText={`${res.description}`} />
    </div>
  );
}
