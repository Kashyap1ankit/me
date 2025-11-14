"use client";

import { gabarito, hanken, manrope } from "@/public/font";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  IconArrowBadgeRight,
  IconCalendarWeek,
  IconHeartHandshake,
  IconLicense,
  IconMusic,
  IconMusicOff,
} from "@tabler/icons-react";
import { ThemeToggleButton } from "../theme";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Load Twitter script on client
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const socials = [
    {
      link: "https://x.com/kashyap_tweetts",
      icon: FaXTwitter,
    },
    {
      link: "https://github.com/Kashyap1ankit/",
      icon: FaGithub,
    },

    {
      link: "https://www.linkedin.com/in/ankit-kashyap-coder/",
      icon: FaLinkedinIn,
    },
  ];

  function handleAudioPlayPause() {
    if (!audioRef) return;
    if (isPlaying) {
      //@ts-expect-error not explained
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    } //@ts-expect-error not explained
    audioRef.current?.play();
    setIsPlaying(true);
  }

  return (
    <div className="flex flex-col gap-6 px-4" id="about">
      <Link
        href={"https://cal.com/kashyap-ankit"}
        target="_blank"
        className=" duration-500 flex gap-x-2 items-center  w-fit  p-2 rounded-full bg-black dark:bg-white/90 shadow-[inset_0_-4px_6px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_-4px_6px_rgba(0,0,0,0.45)] group active:scale-75"
      >
        <IconCalendarWeek size={16} className="text-white dark:text-black" />
        <p
          className={`${manrope.className} text-sm text-white/80 dark:text-black  `}
        >
          Available
        </p>

        <IconArrowBadgeRight
          size={16}
          className="text-white dark:text-black hidden group-hover:block group-hover:animate-come"
        />
      </Link>

      <div className="flex flex-row flex-wrap-reverse gap-y-4 justify-between items-center ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-start gap-x-4">
            <p
              className={` text-black dark:text-white text-2xl sm:text-3xl md:text-4xl ${gabarito.className} font-bold`}
            >
              I&apos;m
            </p>
            <Image
              alt="me"
              aria-label="me"
              width={500}
              height={500}
              src={"/x.webp"}
              className="size-12 rounded-md ring-2 ring-white/90 shadow-md shadow-black dark:shadow-white/70 -rotate-6"
            />
            <p
              className={`text-2xl sm:text-3xl md:text-4xl ${gabarito.className} font-bold bg-gradient-to-r from-blue-400 to-lightBlue text-transparent bg-clip-text`}
            >
              Ankit Kashyap
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-x-4 ">
          <div
            className="cursor-pointer border border-neutral-200 dark:border-neutral-700 rounded-md p-2 m-auto group duration-200 z-[999] bg-white dark:bg-black inset-shadow-sm inset-shadow-black/20 dark:inset-shadow-white/50"
            onClick={handleAudioPlayPause}
          >
            {!isPlaying ? (
              <IconMusicOff className="size-4 sm:size-6" />
            ) : (
              <IconMusic className="size-4 sm:size-6" />
            )}
          </div>

          <ThemeToggleButton />

          <audio loop ref={audioRef} className="hidden">
            <source src="/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <p className={`${hanken.className} text-sm text-gray-500`}>
        I&apos;m a Full Stack Web Developer and Open Source Contributor with
        expertise in building scalable applications using Next.js, NoSql/Sql,
        and Tailwind CSS. Skilled in translating pixel-perfect Figma designs
        into responsive web pages. I bring a solution-driven approach to
        crafting impactful digital products.
      </p>

      <div className="flex flex-row flex-wrap justify-between items-center gap-y-6">
        <div className="flex flex-wrap gap-6">
          <Link
            href={"mailto:kashyap25ankit@gmail.com?subject=Work Enquiry"}
            className="flex gap-2  px-4 items-center bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue  p-2 w-fit text-sm rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20 "
          >
            <IconHeartHandshake stroke={1} size={18} />
            <p className={`${hanken.className} font-bold`}>Work with me </p>
          </Link>

          <Link
            href={
              "https://drive.google.com/file/d/1zsG0jFtzW2zpLr8ojBemGBb9gsUNhaCi/view?usp=sharing"
            }
            className="flex gap-2  px-4 items-center  p-2 w-fit bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue text-sm rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20 "
            target="_blank"
            rel="noopener noreferre"
            download
          >
            <IconLicense stroke={1} size={18} />
            <p className={`${hanken.className} font-bold`}>Resume</p>
          </Link>
        </div>

        <div className="flex gap-4 items-center ">
          {socials.map((e, i: number) => {
            return (
              <Link
                key={i}
                href={e.link}
                className="bg-gray-200 dark:bg-gray-900 p-2 rounded-lg"
                target="_blank"
              >
                <e.icon className="size-4 text-black dark:text-white  " />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
