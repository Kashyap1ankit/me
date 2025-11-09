"use client";

import { cousine, gabarito, manrope } from "@/public/font";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../landing/footer";
import {
  IconArrowBadgeRight,
  IconCalendarWeek,
  IconPointer,
} from "@tabler/icons-react";

export default function AboutLanding() {
  useEffect(() => {
    // Load Twitter script on client
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col gap-6" id="about">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <Link
            href={"https://cal.com/kashyap-ankit"}
            target="_blank"
            className=" duration-500 flex gap-x-2 items-center border w-fit  p-2 rounded-full bg-black inset-shadow-sm inset-shadow-white/50 group active:scale-75"
          >
            <IconCalendarWeek color="white" size={16} />
            <p className={`${manrope.className} text-sm text-white/80  `}>
              Available
            </p>

            <IconArrowBadgeRight
              color="white"
              size={16}
              className=" hidden group-hover:block group-hover:animate-come"
            />
          </Link>

          <p
            className={` text-black dark:text-white text-2xl sm:text-3xl md:text-4xl ${gabarito.className} font-bold`}
          >
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-lightBlue text-transparent bg-clip-text">
              Ankit Kashyap !
            </span>{" "}
          </p>
        </div>

        <Image
          src={"/x.png"}
          width={200}
          height={200}
          className="rounded-full  w-24"
          alt="profile"
        />
      </div>
      <p className={`${cousine.className} text-sm text-gray-500`}>
        I&apos;m a Full Stack Web Developer and Open Source Contributor with
        expertise in building scalable applications using Next.js, NoSql/Sql,
        and Tailwind CSS. Skilled in translating pixel-perfect Figma designs
        into responsive web pages. I bring a solution-driven approach to
        crafting impactful digital products.
      </p>
      <div className="flex gap-6">
        <Link
          href={"mailto:kashyap25ankit@gmail.com?subject=Work Enquiry"}
          className="flex gap-2  px-4 items-center bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue  p-2 w-fit text-sm rounded-md"
        >
          <p>Work with me </p>
          <BsArrowRight />
        </Link>

        <Link
          href={
            "https://drive.google.com/file/d/1OtsYWPPPs6EyK56boMT8sXKe062HV1kj/view?usp=sharing"
          }
          className="flex gap-2  px-4 items-center  p-2 w-fit bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue text-sm rounded-md"
          target="_blank"
          rel="noopener noreferre"
          download
        >
          <p>CV</p>
          <BiDownload />
        </Link>

        <Footer />
      </div>
    </div>
  );
}
