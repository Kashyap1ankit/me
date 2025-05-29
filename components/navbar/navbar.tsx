import { navLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center  fixed top-4 left-1/2 -translate-x-1/2  w-11/12 md:w-1/2  ">
      <Link href={"/"}>
        <Image
          src={"/x.png"}
          width={500}
          height={500}
          className="w-10  rounded-full border border-neutral-900"
          alt="my-img"
        />
      </Link>

      <div className="flex gap-6 border border-neutral-700 px-4 py-2 rounded-full text-xs text-sm bg-black  z-999">
        {navLinks.map((e, i: number) => {
          return (
            <Link
              href={e.link}
              key={i}
              className={` hover:text-blue-500 cursor-pointer duration-500 `}
            >
              <e.icon className="size-4" />
            </Link>
          );
        })}
      </div>

      <Link
        href={"https://github.com/Kashyap1ankit"}
        className="hover:text-sky-700 invert dark:invert-0"
      >
        <FaGithub className="size-6" />
      </Link>
    </div>
  );
}
