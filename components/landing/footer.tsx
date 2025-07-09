"use client";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
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
    <div className="flex gap-2 items-center  duration-500">
      {[
        { theme: "dark", icon: MdDarkMode },
        { theme: "light", icon: CiLight },
      ].map((item) => (
        <div
          key={item.theme}
          className={`cursor-pointer flex items-center justify-center  rounded-full duration-500 p-2 ${
            active === item.theme
              ? "bg-gray-900  dark:text-gray-300"
              : "bg-transparent text-gray-400 dark:text-gray-300"
          }`}
          onClick={() => toggleTheme(item.theme as "light" | "dark" | "system")}
        >
          <item.icon className="size-4 " />
        </div>
      ))}
    </div>
  );
}
