import { gabarito } from "@/public/font";
import contriubutionData from "@/lib/contributions.json";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { GitMerge } from "lucide-react";
import { BsArrowUpRight } from "react-icons/bs";
export default function Contribution() {
  return (
    <div className="px-4">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white `}
      >
        Open Source Contributions
      </p>

      <div className="grid gird-cols-1  gap-8 mt-12">
        {contriubutionData.map((e, i: number) => {
          return (
            <div
              key={i}
              className="border dark:border-neutral-800 p-4 rounded-md "
            >
              <div className="flex justify-between ">
                <div className="flex gap-4">
                  <Image
                    width={500}
                    height={500}
                    alt="company-logo"
                    src={e.logo}
                    className="w-10 h-10 rounded-full"
                  />
                  <p
                    className={`${gabarito.className} text-2xl text-black dark:text-white`}
                  >
                    {e.organisation}
                  </p>
                </div>

                <Link href={e.organisation_github}>
                  <FaGithub className="size-6" />
                </Link>
              </div>
              <hr className=" border-gray-800 my-4" />

              <div className="flex flex-col gap-6">
                {e.contribution.map((e, i) => {
                  return (
                    <div key={i} className="flex justify-between group">
                      <div className="flex gap-4">
                        <GitMerge className="bg-purple-700 p-2 w-8 h-8 rounded-xl" />
                        <p
                          className={`${gabarito.className} text-black dark:text-white text-lg`}
                        >
                          {e.title}
                        </p>
                      </div>

                      <Link href={e.link} target="_blank">
                        <BsArrowUpRight className="text-black dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 font-bold" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
