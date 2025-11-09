import { gabarito } from "@/public/font";
import Link from "next/link";

export default function NotFound({ text }: { text: string }) {
  return (
    <div className="mt-12">
      <p
        className={`${gabarito.className} text-black dark:text-white text-4xl text-center`}
      >
        {text}
      </p>

      <Link href={"/"}>
        <div className="bg-linear-to-t from-blue-700 to-blue-900 w-fit py-2 px-4 mt-16 mx-auto text-sm rounded-full ">
          Back to Home
        </div>
      </Link>
    </div>
  );
}
