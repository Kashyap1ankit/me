"use client";
import BlogCard from "@/components/blog/blog-card";
// import { allBlogs } from "@/lib/constant";
import { gabarito, hanken } from "@/public/font";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../actions/storage";

export default function BlogPage() {
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    async function fn() {
      const allBlogsArray = await getAllBlogs();
      for (let blog of allBlogsArray) {
        const res = await fetch(blog.url);
        const text = await res.text();
        setAllBlogs((prev) => {
          return [
            ...prev,
            {
              title: "A Random Day in My Life",
              description: text,
              id: blog.pathname.slice(4),
              tag: ["Personal", "Engeering"],
              date: blog.uploadedAt,
            },
          ];
        });
      }
    }

    fn();
  }, []);
  return (
    <div className="mx-auto pt-6 md:pt-12 text-black dark:text-white mb-24 ">
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

      <div className="flex flex-col gap-y-12 mt-12 px-4">
        {allBlogs.map((e, i) => {
          return (
            <Link href={`/blog/${e.id}`}>
              <BlogCard
                key={i}
                title={e.title}
                description={e.description}
                id={e.id}
                tag={e.tag}
                date={e.date}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
