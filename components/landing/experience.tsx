import { cousine, gabarito } from "@/public/font";
import experienceData from "@/lib/experience.json";

import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

interface dataType {
  company: string;
  about: string;
  role: string;
  timeframe: string;
  image: string;
}

export default function Experience() {
  return (
    <div id="experience">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white`}
      >
        Experience
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((e: dataType, i: number) => {
          return (
            <div
              key={i}
              className="p-4 border hover:border-slate-400 dark:border-neutral-900 dark:hover:border-neutral-800 duration-300 cursor-pointer rounded-md flex flex-col gap-8 w-fit"
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
                  <p
                    className={`${gabarito.className} text-xl text-black dark:text-white`}
                  >
                    {e.company}
                  </p>
                  <p className="text-gray-400 text-sm">{e.role}</p>
                </div>
              </div>

              <p
                className={`${cousine.className} text-sm text-gray-600 dark:text-gray-400`}
              >
                {e.about}
              </p>

              <div className="flex items-center gap-2 self-end">
                <FaCalendarAlt />
                <p className="text-gray-400 text-sm ">{e.timeframe}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
