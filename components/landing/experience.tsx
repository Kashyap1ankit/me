"use client";

import { cousine, gabarito, manrope } from "@/public/font";
import { experienceData } from "@/lib/experience";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface dataType {
  company: string;
  about: string[];
  role: string;
  timeframe: string;
  image: string;
}

export default function Experience() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="experience">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
      >
        Experience
      </p>

      <div className="mt-12 flex flex-col gap-6">
        {experienceData.map((e: dataType, i: number) => {
          const isOpen = openedIndex === i;

          return (
            <div
              key={i}
              className="p-4 cursor-pointer flex flex-col gap-4 w-full"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => toggleIndex(i)}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={e.image}
                    alt={`${e.company}-logo`}
                    width={100}
                    height={100}
                    className="max-w-12 max-h-12 rounded-full"
                  />
                  <div>
                    <div className="flex gap-4 items-center">
                      <p
                        className={`${gabarito.className} text-xl text-black dark:text-white`}
                      >
                        {e.company}
                      </p>
                      {isOpen ? (
                        <ChevronDown className="size-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="size-4 text-gray-500" />
                      )}
                    </div>
                    <p
                      className={`${manrope.className} text-gray-500 text-sm font-medium`}
                    >
                      {e.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 ">
                  <p className={`${manrope.className} text-gray-500 text-sm`}>
                    {e.timeframe}
                  </p>
                </div>
              </div>

              <ul
                className={`duration-500 mx-auto w-full ${
                  isOpen ? "list-disc flex flex-col gap-4 mt-4" : "hidden"
                }`}
              >
                {e.about.map((text: string, j: number) => (
                  <li
                    key={j}
                    className={`${cousine.className} text-sm text-gray-600 dark:text-gray-400`}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
