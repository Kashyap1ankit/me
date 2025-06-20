import { navLinks } from "@/lib/constant";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Footer from "../landing/footer";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
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

  return (
    <div className="flex justify-start gap-4 items-center  fixed bottom-4 left-1/2 -translate-x-1/2  w-fit border border-neutral-700 rounded-full z-999 bg-black py-2 px-4">
      <div className="flex gap-4 items-center border-r pr-2">
        {navLinks.map((e, i: number) => {
          return (
            <Link
              href={e.link}
              key={i}
              className={`cursor-pointer duration-500 `}
            >
              <e.icon className="size-4" />
            </Link>
          );
        })}
      </div>
      <div className="flex gap-4 items-center border-r pr-2">
        {socials.map((e, i: number) => {
          return (
            <Link key={i} href={e.link}>
              <e.icon className="size-4  dark:text-white  " />
            </Link>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
