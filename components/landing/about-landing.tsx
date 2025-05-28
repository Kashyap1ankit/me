import { cousine, gabarito } from "@/public/font";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function AboutLanding() {
  return (
    <div className="flex flex-col gap-6" id="about">
      <div className="flex justify-between">
        <p
          className={` text-black dark:text-white text-2xl ${gabarito.className}`}
        >
          Hello , I&apos;m{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-violet-700 text-transparent bg-clip-text">
            Ankit Kashyap !
          </span>{" "}
        </p>

        <p className="animate-wave">&#128075;</p>
      </div>
      <p className={`${cousine.className} text-sm text-gray-400`}>
        I&apos;m a Full Stack Web Developer and Open Source Contributor with
        expertise in building scalable applications using Next.js, NoSql/Sql,
        and Tailwind CSS. Skilled in translating pixel-perfect Figma designs
        into responsive web pages. I bring a solution-driven approach to
        crafting impactful digital products.
      </p>

      <div className="flex gap-6">
        <Link
          href={"mailto:kashyap25ankit@gmail.com?subject=Work Enquiry"}
          className="flex gap-2  px-4 items-center bg-[#0879E7] dark:bg-[#0c1c32] text-white dark:text-[#0879E7]  p-2 w-fit text-sm rounded-md"
        >
          <p>Work with me </p>
          <BsArrowRight />
        </Link>

        <Link
          href={
            "https://drive.google.com/file/d/1OtsYWPPPs6EyK56boMT8sXKe062HV1kj/view?usp=sharing"
          }
          className="flex gap-2  px-4 items-center  p-2 w-fit bg-[#0879E7] dark:bg-[#0c1c32] text-white dark:text-[#0879E7] text-sm rounded-md"
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
