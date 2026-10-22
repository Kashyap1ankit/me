"use client";

import { blogDataType } from "@/lib/types";
import { manrope, space } from "@/public/font";
import {
  Calendar03Icon,
  SquareArrowUpRightIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

export default function BlogCard({
  title,
  id,
  tag,
  createdAt,
  shortDes,
}: blogDataType) {
  const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="flex flex-col gap-y-2"
      id={typeof id === "string" ? id : String(id)}
    >
      <div className="flex flex-col gap-y-2 md:flex-row justify-between">
        <p className={`${space.className} font-bold text-xl  md:text-2xl`}>
          {title}{" "}
        </p>

        <div className="flex flex-row items-center justify-start gap-x-4 ">
          {tag &&
            tag.map((e: { label: string; value: string }, i: number) => {
              return (
                <p
                  key={i}
                  className={`${manrope.className} text-xs text-gray-600 py-1 px-2 bg-gray-200 dark:bg-gray-900 dark:text-white rounded-sm `}
                >
                  {e.label}
                </p>
              );
            })}
        </div>
      </div>

      <p className={`${manrope.className} text-sm md:text-md text-gray-500`}>
        {shortDes}
      </p>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-x-2">
          <HugeiconsIcon icon={Calendar03Icon} size={12} />
          <p className={`${manrope.className} text-xs`}>
            {new Date(createdAt).toDateString()}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <HugeiconsIcon icon={SquareArrowUpRightIcon} />
        </div>
      </div>
    </div>
  );
}
