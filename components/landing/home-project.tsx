"use client";
import { gabarito, hanken } from "@/public/font";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Icon,
  IconArrowBigDown,
  IconLink,
  IconProps,
} from "@tabler/icons-react";
import { allProjects } from "@/lib/constant";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons";

interface dataType {
  name: string;
  description: string;
  deployed: string | null;
  github: string | null;
  tech: (
    | ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
    | IconType
  )[];
  image: string;
  category: string;
}

export default function HomeProjects() {
  const router = useRouter();

  return (
    <div id="projects" className="flex flex-col gap-6">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
      >
        Projects
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2   gap-6 px-4">
        {allProjects.slice(0, 2).map((e: dataType, i: number) => {
          return (
            <div
              key={i}
              className="p-2 rounded-xl border dark:border-neutral-800 cursor-pointer dark:hover:border-neutral-800  duration-300 flex flex-col gap-6 group"
            >
              <div className="relative">
                <Image
                  src={e.image}
                  width={500}
                  height={500}
                  alt="logo"
                  className="w-full rounded-2xl "
                />

                <Link
                  href={`https://${e.deployed}`}
                  target="_blank"
                  className="absolute top-2 sm:top-4 right-4 bg-gray-100/80 dark:bg-gray-700/80  rounded-lg "
                >
                  <IconLink className="p-2 rounded-lg size-8 text-black dark:text-white" />
                </Link>

                <div className="rounded-lg p-2 px-2 w-fit bg-white dark:bg-black absolute -bottom-4 right-4 flex flex-row gap-x-2">
                  {e.tech.map((TechIcon, i) => (
                    <TechIcon
                      key={i}
                      className="size-4 text-black dark:text-white"
                      stroke={"1.5"}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="flex flex-row items-center justify-start gap-x-4">
                  <p
                    className={`${hanken.className} text-black dark:text-white font-bold text-xl sm:text-2xl`}
                  >
                    {e.name}
                  </p>

                  <p
                    className={`${hanken.className} p-1 rounded-lg  bg-gray-200 dark:bg-gray-900 text-black/50 dark:text-white  text-xs `}
                  >
                    #{e.category.toLowerCase()}
                  </p>
                </div>
                <p className={`${hanken.className} text-gray-500 text-sm `}>
                  {e.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="border dark:border-neutral-900  dark:hover:border-neutral-800  text-center p-2 rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20  cursor-pointer duration-300 w-fit  bg-lightBlue dark:bg-darkBlue hover:bg-lightBlue  dark:hover:bg-darkBlue dark:text-lightBlue text-white text-sm flex items-center gap-2 self-end mr-4 border group"
        onClick={() => router.push("/projects")}
      >
        <p className={`${hanken.className} font-bold`}> See more</p>
        <IconArrowBigDown size={16} className="group-hover:rotate-180" />
      </div>
    </div>
  );
}
