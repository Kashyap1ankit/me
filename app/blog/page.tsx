import BlogCard from "@/components/blog/blog-card";
import { allBlogs } from "@/lib/constant";
import { gabarito, hanken } from "@/public/font";
import { PlusSignSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="mx-auto pt-6 md:pt-12 text-black  mb-24 ">
      <div
        className={` p-2 border-l-8 border-black dark:border-gray-200 bg-gray-200 dark:bg-titleBg flex justify-between`}
      >
        <p
          className={`${gabarito.className} text-lg sm:text-2xl text-black dark:text-white font-semibold  `}
        >
          Blogs
        </p>

        <Link href={"/blog/create"}>
          <HugeiconsIcon
            icon={PlusSignSquareIcon}
            size={28}
            color="white"
            fill="#0879e7"
            cursor={"pointer"}
          />
        </Link>
      </div>

      <p className={`${hanken.className} text-gray-500 mt-6 text-sm px-4`}>
        Personal Thoughts, Opinions And Learning dumping
      </p>

      <div className="flex flex-col gap-y-12 mt-12 px-4">
        {allBlogs.map((e, i) => {
          return (
            <BlogCard
              key={i}
              title={e.title}
              description={e.description}
              id={e.id}
              tag={e.tag}
              date={e.date}
            />
          );
        })}
      </div>
    </div>
  );
}
