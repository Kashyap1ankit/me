"use client";
import { Moon, Sun } from "lucide-react";
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
          onClick={() => toggleTheme(item.theme as "light" | "dark" | "system")}
        >
          <item.icon className="w-4 h-4 " />
        </div>
      ))}
    </div>
  );
}
