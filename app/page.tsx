import AboutLanding from "@/components/landing/about-landing";
import Experience from "@/components/landing/experience";
import HomeProjects from "@/components/landing/home-project";
import { gabarito } from "@/public/font";
import GhActivityCard from "gh-activity-card/components/gh-activity-card";

import Skills from "@/components/landing/skiils";

export default function Home() {
  return (
    <>
      <div className="mx-auto pt-12 flex flex-col gap-18">
        <AboutLanding />
        <Skills />
        <Experience />
        <HomeProjects />
        <div className="flex flex-col gap-6 mb-12">
          <p
            className={`${gabarito.className} text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
          >
            Github Contribution
          </p>
          <GhActivityCard
            username="kashyap1ankit"
            className="text-black dark:text-white"
          />
        </div>
      </div>
    </>
  );
}
