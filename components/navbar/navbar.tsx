"use client";

import { navLinks, navLinksType } from "@/lib/constant";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<
    "home" | "projects" | "contribution"
  >("home");

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2   max-w-[280px] sm:max-w-fit  border dark:border-neutral-700   rounded-full z-999 bg-white/50  dark:bg-gray-900/50  p-1 overflow-x-scroll no-scrollbar shadow-inner shadow-white/20 ">
      <div className="flex justify-start gap-4 items-center  sm:max-w-fit border dark:border-neutral-800 rounded-full z-999  bg-white dark:bg-black px-4 py-1 overflow-x-scroll no-scrollbar ">
        <div className=" flex gap-2 items-center ">
          {navLinks.map((e: navLinksType, i: number) => {
            return (
              <Link href={e.link} key={i}>
                <div
                  className={`cursor-pointer duration-500 ${
                    activeTab === e.value
                      ? "bg-gray-300 dark:bg-gray-900"
                      : "bg-transparent"
                  } p-2 px-4 rounded-full flex flex-row items-center justify-center gap-1`}
                  onClick={() => setActiveTab(e.value)}
                >
                  <e.icon
                    stroke={1}
                    size={20}
                    className="text-black dark:text-white"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
