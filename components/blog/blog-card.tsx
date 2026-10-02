import { hanken } from "@/public/font";
import {
  Calendar03Icon,
  SquareArrowUpRightIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import MarkdownPreview from "@uiw/react-markdown-preview";

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
      <div className="flex flex-row justify-between">
        <p className={`${hanken.className} font-bold text-xl`}>{title} </p>

        <div className="flex flex-row items-center justify-start gap-x-4 ">
          {tag.map((e: string, i: number) => {
            return (
              <p
                key={i}
                className={`${hanken.className} text-[8px] text-gray-600 py-1 px-2 bg-gray-200 rounded-sm `}
              >
                {e}
              </p>
            );
          })}
        </div>
      </div>

      <MarkdownPreview
        source={description.slice(0, 250)}
        style={{ padding: 0, fontSize: 12, color: "#6a7282" }}
      />

      <div className="flex flex-row justify-between">
        <HugeiconsIcon icon={SquareArrowUpRightIcon} />
      </div>

      <div className="flex flex-row items-center justify-start gap-x-2">
        <HugeiconsIcon icon={Calendar03Icon} size={12} />
        <p className={`${hanken.className} text-xs`}>{date.toLocaleString()}</p>
      </div>
    </div>
  );
}
