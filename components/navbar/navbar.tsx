"use client";

import { navLinks, navLinksType } from "@/lib/constant";
import { useActiveTab } from "@/store/store";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { hanken } from "@/public/font";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 max-w-[280px] sm:max-w-fit z-999 bg-white  dark:bg-gray-900  p-1 overflow-x-scroll no-scrollbar shadow-inner shadow-white/20 gap-x-8 bg-white  rounded-[18px] w-fit ring-4 ring-black/5   ">
      <div className=" flex gap-2 items-center ">
        {navLinks.map((e: navLinksType, i: number) => {
          return <NavItemComp key={i} e={e} />;
        })}
      </div>
    </div>
  );
}

function NavItemComp({ e }: { e: navLinksType }) {
  const { activeTab, setActiveTab } = useActiveTab();
  const [hovered, setHovered] = useState(false);

  const leavingAnimate = {
    initial: {
      opacity: 1,
    },

    hover: {
      opacity: 0,

      y: 8,
    },
  };

  const comingAnimate = {
    initial: {
      opacity: 0,
      y: 20,
    },

    hover: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Link
      href={e.link}
      onClick={() => setActiveTab(e.value)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`cursor-pointer duration-500 relative ${
          activeTab === e.value
            ? "bg-gray-300 dark:bg-gray-800"
            : "bg-transparent"
        } py-2 px-6 rounded-[15px] duration-500 `}
      >
        <motion.div
          variants={leavingAnimate}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
          transition={{
            duration: 0.2,
            type: "spring",
          }}
          className=""
        >
          <HugeiconsIcon icon={e.icon} stroke="2" size={24} />
        </motion.div>

        <motion.div
          variants={comingAnimate}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
          transition={{
            duration: 0.2,
            type: "spring",
            damping: 10,
          }}
          className="absolute inset-0 items-center justify-center flex flex-row gap-1"
        >
          <HugeiconsIcon icon={e.icon2} stroke="2" size={24} />
          <p className={`${hanken.className} text-xs`}>{e.name}</p>
        </motion.div>
      </div>
    </Link>
  );
}
