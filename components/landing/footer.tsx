"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMail } from "react-icons/cg";
import { CiMonitor } from "react-icons/ci";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      link: "https://x.com/kashyap_tweetts",
      icon: FaTwitter,
    },
    {
      link: "https://github.com/Kashyap1ankit/",
      icon: FaGithub,
    },

    {
      link: "mailto:kashyap25ankit@gmail.com?subject=Work Enquiry",
      icon: CgMail,
    },
  ];

  const { setTheme } = useTheme();
  const [active, setActive] = useState("dark");

  function toggleTheme(theme: "light" | "dark" | "system") {
    setActive(theme);
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setActive(savedTheme);
    setTheme(savedTheme);
  }, [setTheme]);

  return (
    <div className="mt-24 mb-12 flex justify-between">
      <div className="flex gap-4 ">
        {socials.map((e, i: number) => {
          return (
            <Link key={i} href={e.link}>
              <e.icon className="size-6 text-black dark:text-white  hover:text-gray-400 dark:hover:text-gray-700" />
            </Link>
          );
        })}
      </div>

      <div className="dark:bg-black rounded-full p-2 flex gap-2 items-center border dark:border-neutral-800 duration-500">
        {[
          { theme: "system", icon: CiMonitor },
          { theme: "dark", icon: Moon },
          { theme: "light", icon: Sun },
        ].map((item) => (
          <div
            key={item.theme}
            className={`cursor-pointer flex items-center justify-center w-6 h-6 rounded-full duration-500 ${
              active === item.theme
                ? "bg-gray-300 dark:bg-gray-700 text-black dark:text-gray-300"
                : "text-gray-400 dark:text-gray-300"
            }`}
            onClick={() =>
              toggleTheme(item.theme as "light" | "dark" | "system")
            }
          >
            <item.icon className="w-4 h-4 " />
          </div>
        ))}
      </div>
    </div>
  );
}
