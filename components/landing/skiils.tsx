"use client";

import { skills } from "@/lib/constant";
import { gabarito } from "@/public/font";
import { useState } from "react";

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white`}
      >
        Skills
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 overflow-x-hidden mt-6">
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
          className="border dark:border-neutral-900  dark:hover:border-neutral-800 mt-6 text-center p-2 rounded-lg cursor-pointer duration-300 w-full hover:bg-slate-200 dark:hover:bg-gray-950 text-gray-400"
          onClick={() => setShowMore(true)}
        >
          See more
        </div>
      ) : (
        <div
          className="border dark:border-neutral-900  dark:hover:border-neutral-800 mt-6 text-center p-2 rounded-lg cursor-pointer duration-300 w-full hover:bg-slate-200 dark:hover:bg-gray-950 text-gray-400"
          onClick={() => setShowMore(false)}
        >
          See Less
        </div>
      )}
    </div>
  );
}
