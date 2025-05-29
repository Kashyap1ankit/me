"use client";

import { skills } from "@/lib/constant";
import { gabarito } from "@/public/font";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white`}
      >
        Skills
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 overflow-x-hidden  duration-300">
        {!showMore
          ? skills.slice(0, 12).map((skill, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-2 justify-center items-center bg-slate-200 dark:bg-zinc-900 p-2 min-w-28 rounded-2xl cursor-pointer group"
                >
                  <skill.icon className="size-4 text-black dark:text-white group-hover:-translate-x-2 duration-300" />
                  <p className="text-xs leading-[1.6] font-normal  text-black dark:text-white">
                    {skill.title}
                  </p>
                </div>
              );
            })
          : skills.map((skill, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-2 justify-center items-center bg-slate-200 dark:bg-zinc-900 p-2 min-w-28 rounded-2xl cursor-pointer group"
                >
                  <skill.icon className="size-4 text-black dark:text-white group-hover:-translate-x-2 duration-300" />
                  <p className="text-xs leading-[1.6] font-normal  text-black dark:text-white">
                    {skill.title}
                  </p>
                </div>
              );
            })}
      </div>

      {!showMore ? (
        <div
          className="border dark:border-neutral-900  dark:hover:border-neutral-800  text-center p-2 rounded-xl cursor-pointer duration-300 w-fit  bg-lightBlue dark:bg-darkBlue hover:bg-lightBlue  dark:hover:bg-darkBlue dark:text-lightBlue text-white text-sm flex items-center gap-2 self-end"
          onClick={() => setShowMore(true)}
        >
          <p> See more</p>
          <ChevronDown className="size-4" />
        </div>
      ) : (
        <div
          className="border dark:border-neutral-900  dark:hover:border-neutral-800  text-center p-2 rounded-xl cursor-pointer duration-300 w-fit  bg-lightBlue dark:bg-darkBlue hover:bg-lightBlue  dark:hover:bg-darkBlue dark:text-lightBlue text-white text-sm flex items-center gap-2 self-end"
          onClick={() => setShowMore(false)}
        >
          <p> See less</p>
          <ChevronUp className="size-4" />
        </div>
      )}
    </div>
  );
}
