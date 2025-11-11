"use client";

import { cousine, gabarito, hanken, manrope } from "@/public/font";
import { experienceData } from "@/lib/experience";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  IconBriefcase,
  IconCircleArrowDown,
  IconCircleArrowRight,
  IconCircleArrowUpRight,
} from "@tabler/icons-react";

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
    <div id="experience" className="flex flex-col gap-6">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
      >
        Experience
      </p>

      <div className=" flex flex-col items-start justify-start gap-6  w-full">
        {experienceData.map((e: dataType, i: number) => {
          const isOpen = openedIndex === i;

          return (
            <div
              key={i}
              className="p-4 cursor-pointer flex flex-col gap-4 sm:gap-0 w-full "
            >
              <div
                className="flex flex-col sm:flex-row  gap-4 sm:items-center justify-between"
                onClick={() => toggleIndex(i)}
              >
                <div className="flex items-center gap-2">
                  <div>
                    <IconBriefcase
                      size={36}
                      className="border border-neutral-200 dark:border-neutral-800 p-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex gap-4 items-center">
                      <p
                        className={`${gabarito.className} text-xl text-black dark:text-white`}
                      >
                        {e.company}
                      </p>
                      {isOpen ? (
                        <IconCircleArrowDown
                          size={24}
                          className=" text-gray-500"
                        />
                      ) : (
                        <IconCircleArrowRight
                          size={24}
                          className=" text-gray-500"
                        />
                      )}
                    </div>
                    <p
                      className={`${hanken.className} text-gray-500 text-sm font-medium`}
                    >
                      {e.role}
                    </p>
                  </div>
                </div>

                <div className="flex  place-self-end sm:place-self-start sm:items-center gap-2  ">
                  <p className={`${hanken.className} text-gray-500 text-sm`}>
                    {e.timeframe}
                  </p>
                </div>
              </div>

              <ul
                className={`duration-500 mx-auto w-full  ${
                  isOpen ? "list-disc flex flex-col gap-4 mt-4" : "hidden"
                }`}
              >
                {e.about.map((text: string, j: number) => (
                  <li
                    key={j}
                    className={`${hanken.className} text-sm text-gray-600 dark:text-gray-400`}
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
