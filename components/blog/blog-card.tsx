import { hanken } from "@/public/font";
import {
  Calendar03Icon,
  SquareArrowUpRightIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

interface BlogCardType {
  title: string;
  description: string;
  id: number | string;
  tag: string[];
  date: Date;
}

export default function BlogCard({
  title,
  description,
  id,
  tag,
  date,
}: BlogCardType) {
  return (
    <div
      className="flex flex-col gap-y-2"
      id={typeof id === "string" ? id : String(id)}
    >
      <p className={`${hanken.className} font-bold text-xl`}>{title} </p>

      <p className={`${hanken.className} text-gray-500 text-sm `}>
        {description.slice(0, 250)}
      </p>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-start gap-x-4">
          {tag.map((e: string, i: number) => {
            return (
              <p
                key={i}
                className={`${hanken.className} text-[10px] text-gray-600 p-2 bg-gray-200 rounded-lg `}
              >
                {e}
              </p>
            );
          })}
        </div>

        <HugeiconsIcon icon={SquareArrowUpRightIcon} />
      </div>

      <div className="flex flex-row items-center justify-start gap-x-2">
        <HugeiconsIcon icon={Calendar03Icon} size={12} />
        <p className={`${hanken.className} text-xs`}>{date.toLocaleString()}</p>
      </div>
    </div>
  );
}
