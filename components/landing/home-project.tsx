"use client";
import { cousine, gabarito, hanken } from "@/public/font";
import projectsData from "@/lib/projects.json";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IconArrowBigDown } from "@tabler/icons-react";

interface dataType {
  name: string;
  description: string;
  deployed: string;
  github: string;
  tech: string[];
  image: string;
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
        {projectsData.map((e: dataType, i: number) => {
          return (
            <div
              key={i}
              className="p-4 rounded-lg border hover:border-blue-200 dark:border-neutral-800 cursor-pointer dark:hover:border-neutral-800  duration-300 flex flex-col gap-6 group"
            >
              <div className="flex justify-between items-center">
                <Image
                  src={e.image}
                  width={500}
                  height={500}
                  alt="logo"
                  className="w-12 rounded-full "
                />
                <Link href={e.github} className="hover:text-gray-400">
                  <FaGithub className="size-6 text-black dark:text-white" />
                </Link>
              </div>

              <div>
                <p
                  className={`${gabarito.className} text-xl font-bold font-bold text-black dark:text-white`}
                >
                  {e.name}
                </p>

                <p
                  className={`${cousine.className} text-gray-500 text-sm mt-2`}
                >
                  {e.description}
                </p>
              </div>

              <Link
                href={`https://${e.deployed}`}
                className={`${cousine.className} text-sm text-gray-400 flex gap-2 items-center group-hover:text-blue-500`}
                target="_blank"
              >
                <p>{e.deployed}</p>

                <BsArrowUpRight />
              </Link>

              <div className="flex gap-2 flex-wrap">
                {e.tech.map((e: string, i: number) => {
                  return (
                    <p
                      key={i}
                      className="border dark:border-neutral-800 rounded-xl p-2 w-fit text-gray-500 text-xs bg-slate-200 dark:bg-transparent"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="border dark:border-neutral-900  dark:hover:border-neutral-800  text-center p-2 rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20  cursor-pointer duration-300 w-fit  bg-lightBlue dark:bg-darkBlue hover:bg-lightBlue  dark:hover:bg-darkBlue dark:text-lightBlue text-white text-sm flex items-center gap-2 self-end mr-4 border"
        onClick={() => router.push("/projects")}
      >
        <p className={`${hanken.className} font-bold`}> See more</p>
        <IconArrowBigDown size={16} />
      </div>
    </div>
  );
}
