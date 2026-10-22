"use client";
import { getBlogWithId } from "@/app/actions/storage";
import Editor from "@/components/blog/editor";
import BlogPostSkeleton from "@/components/blog/blog-post-skeleton";
import { manrope, space } from "@/public/font";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { use, useEffect, useState } from "react";
import { blogDataType } from "@/lib/types";
import { HugeiconsIcon } from "@hugeicons/react";

import Link from "next/link";
import { ChevronsLeft } from "lucide-react";
import ShareButton from "@/components/blog/share";
import NoBlogPost from "@/components/blog/no-blog-post";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState<blogDataType | null>(null);

  useEffect(() => {
    async function fn() {
      try {
        setLoading(true);
        const text = await getBlogWithId(slug);
        if (!text) {
          setRes(null);
          return;
        }

        setRes(text);
      } catch {
        setRes(null);
      } finally {
        setLoading(false);
      }
    }

    fn();
  }, [slug]);

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

      {loading ? (
        <BlogPostSkeleton />
      ) : !res ? (
        <NoBlogPost type="not-found" slug={slug} className="mt-4" />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
