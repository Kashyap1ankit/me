"use client";
import BlogCard from "@/components/blog/blog-card";
import BlogCardSkeleton from "@/components/blog/blog-card-skeleton";
import NoBlogPost from "@/components/blog/no-blog-post";

import { gabarito, hanken } from "@/public/font";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../actions/storage";
import { blogDataType } from "@/lib/types";
import { blogTags } from "@/lib/constant";

const SKELETON_ITEMS = [
  { titleWidth: "w-3/5 md:w-1/2", descWidth1: "w-11/12", descWidth2: "w-2/3" },
  { titleWidth: "w-4/5 md:w-3/5", descWidth1: "w-full", descWidth2: "w-1/2" },
  { titleWidth: "w-1/2 md:w-2/5", descWidth1: "w-10/12", descWidth2: "w-3/5" },
  { titleWidth: "w-3/4 md:w-1/2", descWidth1: "w-11/12", descWidth2: "w-4/6" },
];

export default function BlogPage() {
  const [allBlogs, setAllBlogs] = useState<blogDataType[] | []>([]);
  const [mounted, setMounted] = useState(false);
  const [activeTag, setActiveTag] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fn() {
      try {
        setLoading(true);
        const allBlogsArray = await getAllBlogs();

        const blogs = (
          await Promise.all(
            allBlogsArray.map(async (blog) => {
              try {
                const res = await fetch(blog.url);
                const text = await res.json();
                return {
                  title: text.title,
                  description: text.description,
                  id: blog.pathname.slice(5),
                  tag: text.tag,
                  createdAt: text.createdAt,
                  shortDes: text.shortDes,
                };
              } catch {
                return null;
              }
            }),
          )
        ).filter(Boolean) as blogDataType[];

        setAllBlogs(blogs);
      } catch {
        console.log("Error happened");
      } finally {
        setLoading(false);
      }
    }

    if (mounted) fn();
  }, [mounted]);

  const filteredBlogs =
    activeTag === "All"
      ? allBlogs
      : allBlogs.filter((blog) =>
          blog.tag?.some((tag) => tag.value === activeTag.toLowerCase()),
        );

  function handleTagClick(label: string) {
    setActiveTag(label);
  }

  return (
    <div className="mx-auto pt-6 text-black dark:text-white mb-12 ">
      <div
        className={` p-2 border-l-8 border-black dark:border-gray-200 bg-gray-200 dark:bg-titleBg flex justify-between`}
      >
        <p
          className={`${gabarito.className} text-lg sm:text-2xl text-black dark:text-white font-semibold  `}
        >
          Blogs
        </p>
      </div>

      <p className={`${hanken.className} text-gray-500 mt-6 text-sm px-4`}>
        Personal Thoughts, Opinions And Learning dumping
      </p>

      <div className="flex flex-col gap-y-12 mt-10 px-4">
        <div className="group/tag flex flex-wrap gap-2 justify-start">
          <p
            key={"All"}
            onClick={() => handleTagClick("All")}
            className={`${hanken.className} blog-tag cursor-pointer
        bg-gray-200 dark:bg-gray-900 text-black/50 dark:text-white
        py-1 px-2 rounded-lg text-xs md:text-sm transition-all duration-200 min-w-16 md:min-w-24 text-center  ${activeTag !== "All" ? "blur-xs" : ""}`}
          >
            All
          </p>
          {blogTags.map((e) => {
            return (
              <p
                onClick={() => handleTagClick(e.label)}
                key={e.label}
                className={`${hanken.className} blog-tag cursor-pointer
        bg-gray-200 dark:bg-gray-900 text-black/50 dark:text-white
        py-1 px-2 rounded-lg text-xs md:text-sm transition-all duration-200 min-w-16 md:min-w-24 text-center ${activeTag !== e.label && activeTag !== "All" ? "blur-xs" : ""}`}
              >
                {e.label}
              </p>
            );
          })}
        </div>

        {loading ? (
          <div className="flex flex-col gap-y-12">
            {SKELETON_ITEMS.map((item, i) => (
              <BlogCardSkeleton
                key={i}
                titleWidth={item.titleWidth}
                descWidth1={item.descWidth1}
                descWidth2={item.descWidth2}
              />
            ))}
          </div>
        ) : filteredBlogs.length === 0 ? (
          <NoBlogPost
            type={allBlogs.length === 0 ? "empty" : "no-tag-match"}
            tag={activeTag}
            onResetFilter={() => setActiveTag("All")}
            className="my-4"
          />
        ) : (
          <div className="flex flex-col gap-y-12 group [&:has(.blog-card:hover)_.blog-card:not(:hover)]:blur-xs">
            {filteredBlogs.map((e, i) => {
              return (
                <Link
                  href={`/blog/${e.id}`}
                  key={i}
                  className="blog-card transition-all duration-200"
                >
                  <BlogCard
                    title={e.title}
                    description={e.description}
                    id={e.id}
                    tag={e.tag}
                    createdAt={e.createdAt}
                    shortDes={e.shortDes}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
