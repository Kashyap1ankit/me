import { gabarito, hanken } from "@/public/font";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/lib/constant";
import { IconLink } from "@tabler/icons-react";

export default function Projects() {
  return (
    <div className="mx-auto pt-6 md:pt-12 text-black  mb-24 ">
      <p
        className={`${gabarito.className} text-lg sm:text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
      >
        Projects
      </p>

      <p className={`${hanken.className} text-gray-500 mt-6 text-sm px-4`}>
        These are my some prominent works which i listed here . I have done a
        lot more projects ,some are ongoing & some are on the verge of ending.So
        if you want to see more projects , you can visit my{" "}
        <Link
          href={"https://github.com/Kashyap1ankit"}
          target="_blank"
          className="text-blue-500 font-bold"
        >
          Github
        </Link>{" "}
        profile
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4">
        {allProjects.map((e, i) => {
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
    </div>
  );
}
