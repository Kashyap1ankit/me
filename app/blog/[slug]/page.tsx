"use client";
import { getBlogWithId } from "@/app/actions/storage";
import Editor from "@/components/blog/editor";
import { manrope, space } from "@/public/font";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { use, useEffect, useState } from "react";
import { toast } from "@/components/ui/toast";
import { blogDataType } from "@/lib/types";
import { HugeiconsIcon } from "@hugeicons/react";

import Link from "next/link";
import { ChevronsLeft } from "lucide-react";
import ShareButton from "@/components/blog/share";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState<blogDataType | null>();

  useEffect(() => {
    async function fn() {
      try {
        setLoading(true);
        const text = await getBlogWithId(slug);
        if (!text) return ``;

        setRes(text);
      } catch {
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
    <div className="flex flex-col gap-y-6 pt-8 pb-16">
      <Link
        href={"/blog"}
        className="flex justify-start gap-x-1 items-center mx-2 group "
      >
        <ChevronsLeft className="text-black/50 dark:text-white/50 size-4 group-hover:text-black dark:group-hover:text-white" />
        <p
          className={`${manrope.className} text-sm md:text-md text-gray-500 text-md group-hover:text-black dark:group-hover:text-white`}
        >
          Return to blogs
        </p>
      </Link>

      <div className="flex flex-col gap-y-4 mx-2">
        <p
          className={`${space.className} mt-2  text-2xl md:text-4xl text-black font-bold dark:text-white `}
        >
          {res?.title}
        </p>

        <p
          className={`${manrope.className} text-sm md:text-md text-gray-500 text-md`}
        >
          {res?.shortDes}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center px-2">
        {/* <div className="flex flex-row items-center justify-start gap-x-4 ">
          {res?.tag?.map((e: { label: string; value: string }, i: number) => {
            return (
              <p
                key={i}
                className={`${manrope.className} text-xs text-gray-600 py-1 px-2 bg-gray-200 dark:bg-gray-900 dark:text-white rounded-sm `}
              >
                {e.label}
              </p>
            );
          })}
        </div> */}

        <div className="flex flex-row items-center justify-start gap-x-2">
          <HugeiconsIcon
            icon={Calendar03Icon}
            size={18}
            className="text-black dark:text-white"
          />
          <p
            className={`${manrope.className} text-xs md:text-sm text-gray-500`}
          >
            {res?.createdAt != null
              ? new Date(res.createdAt).toDateString()
              : ""}
          </p>
        </div>

        <div>
          <ShareButton
            id={slug}
            title={res?.title || "READ THIS BLOG FROM ANKIT KASHYAP "}
            shortDes={res?.shortDes}
          />
        </div>
      </div>

      <div className=" w-full border border-zinc-200 dark:border-zinc-800" />

      <Editor readOnly={true} markDownText={`${res?.description}`} />
    </div>
  );
}
