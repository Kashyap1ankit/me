import { cousine, gabarito } from "@/public/font";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function AboutLanding() {
  return (
    <div className="flex flex-col gap-6" id="about">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <p
            className={` text-black dark:text-white text-2xl sm:text-3xl md:text-4xl ${gabarito.className} font-bold`}
          >
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-lightBlue text-transparent bg-clip-text">
              Ankit Kashyap !
            </span>{" "}
          </p>

          <div className="flex items-center border w-fit  px-2 py-1 rounded-md bg-green-200 ">
            <Dot className="text-green-800 size-4 animate-ping duration-700 opacity-75" />
            <p className={`${cousine.className} text-xs text-green-800`}>
              Available For Work
            </p>
          </div>
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
      </div>
    </div>
  );
}
