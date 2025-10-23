import { navLinks } from "@/lib/constant";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Footer from "../landing/footer";
import { FaXTwitter } from "react-icons/fa6";
import { cousine, manrope } from "@/public/font";

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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2   max-w-[280px] sm:max-w-fit  border border-neutral-700   rounded-full z-999  bg-gray-900/50  p-1 overflow-x-scroll no-scrollbar shadow-inner shadow-white/20">
      <div className="flex justify-start gap-4 items-center  sm:max-w-fit border border-neutral-800 rounded-full z-999   bg-black py-2 px-4 overflow-x-scroll no-scrollbar ">
        <div className=" flex gap-2 items-center ">
          {navLinks.map((e, i: number) => {
            return (
              <div
                key={i}
                className={`cursor-pointer duration-500 ${
                  i === 0 ? "bg-gray-900" : "bg-transparent"
                } py-2 px-4 rounded-full  hover:scale-125 flex flex-row items-center justify-center gap-2`}
              >
                <Link href={e.link}>
                  <e.icon
                    color={i === 0 ? "white" : "gray"}
                    stroke={1}
                    size={24}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

// <div className="flex gap-4 items-center border-r pr-2">
// {socials.map((e, i: number) => {
//   return (
//     <Link
//       key={i}
//       href={e.link}
//       className="bg-gray-900 p-2 rounded-full"
//     >
//       <e.icon className="size-4  dark:text-white  " />
//     </Link>
//   );
// })}
// </div>
