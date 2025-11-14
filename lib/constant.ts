import { DiRedis } from "react-icons/di";
import { RiBearSmileFill } from "react-icons/ri";
import {
  Icon,
  IconBrandCss3,
  IconBrandFramerMotion,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconCode,
  IconGitMerge,
  IconProps,
  IconSmartHome,
} from "@tabler/icons-react";

import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiGit,
  SiMongoose,
  SiPrisma,
  SiRecoil,
  SiTailwindcss,
  SiTypescript,
  SiZod,
  SiSocketdotio,
  SiNextdns,
  SiHono,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiBootstrap,
  SiPassport,
  SiNpm,
  SiTrpc,
  SiReactrouter,
  SiReactquery,
  SiFramer,
  SiExpo,
  SiEjs,
} from "react-icons/si";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const skills = [
  {
    title: "Javascript",
    icon: SiJavascript,
  },
  {
    title: "Typescript",
    icon: SiTypescript,
  },
  {
    title: "Node js",
    icon: SiNodedotjs,
  },

  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "React Native",
    icon: SiReact,
  },
  {
    title: "Expo",
    icon: SiExpo,
  },
  {
    title: "Express.js",
    icon: SiExpress,
  },
  {
    title: "Nextjs",
    icon: SiNextdotjs,
  },
  {
    title: "Honojs",
    icon: SiHono,
  },
  {
    title: "PostgresSQL",
    icon: SiPostgresql,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "Redis",
    icon: DiRedis,
  },
  {
    title: "Websockets",
    icon: SiSocketdotio,
  },
  {
    title: "Docker",
    icon: SiDocker,
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    title: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    title: "React Router",
    icon: SiReactrouter,
  },
  {
    title: "React Query",
    icon: SiReactquery,
  },
  {
    title: "Prisma",
    icon: SiPrisma,
  },
  {
    title: "Mongoose",
    icon: SiMongoose,
  },
  {
    title: "Git",
    icon: SiGit,
  },
  {
    title: "Recoil",
    icon: SiRecoil,
  },
  {
    title: "Zustand",
    icon: RiBearSmileFill,
  },
  {
    title: "Auth.js",
    icon: SiNextdns,
  },
  {
    title: "Passport.js",
    icon: SiPassport,
  },

  {
    title: "Npm",
    icon: SiNpm,
  },

  {
    title: "Zod",
    icon: SiZod,
  },
  {
    title: "tRpc",
    icon: SiTrpc,
  },
  {
    title: "Framer Motion",
    icon: SiFramer,
  },
];

export const navLinks: navLinksType[] = [
  {
    name: "Home",
    icon: IconSmartHome,
    link: "/",
    value: "/",
  },
  {
    name: "Projects",
    icon: IconCode,
    link: "/projects",
    value: "/projects",
  },
  {
    name: "Contribution",
    icon: IconGitMerge,
    link: "/contributions",
    value: "/contributions",
  },
];

export interface navLinksType {
  name: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  link: string;
  value: tabType;
}
export type tabType = "/" | "/projects" | "/contributions";

export const allProjects = [
  {
    name: "JobJunction",
    description:
      "Job portal where user can see job postings & can also post one for community if they know.",
    deployed: "jj.10xdevlab.in",
    github: "https://github.com/Kashyap1ankit/Jobjunction",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      SiPostgresql,
      IconBrandFramerMotion,
    ],
    image: "/jj.webp",
    category: "Product",
  },

  {
    name: "Earnkit",
    description: "Designed & coded landing page for earnkit",
    deployed: "earnkit.10xdevlab.in",
    github: "https://github.com/Kashyap1ankit/EarnKit",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      IconBrandFramerMotion,
    ],
    image: "/earnkit.webp",
    category: "Revamp",
  },

  {
    name: "Logofy",
    description:
      "Helps to generate professional logos for their company. Describe in few words what you want in the logo and get it as svg",
    deployed: "logofy.10xdevlab.in",
    github: "/github-not-found",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      SiPostgresql,
      IconBrandFramerMotion,
    ],
    image: "/logofy.webp",
    category: "Product",
  },

  {
    name: "Referrush",
    description: "Designed & coded landing page for earnkit",
    deployed: "referrush-five.vercel.app/",
    github: "https://github.com/Kashyap1ankit/referrush",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      IconBrandFramerMotion,
    ],
    image: "/referush.webp",
    category: "Revamp",
  },

  {
    name: "Techtalkies",
    description:
      "Platform where user can come & write blogs. If user don't know what to write then they can use Ai to write blogs by giving topic name",
    deployed: "techtalkies.10xdevlab.in",
    github: "https://github.com/Kashyap1ankit/Techtalkies",
    tech: [
      IconBrandReact,
      IconBrandTypescript,
      IconBrandTailwind,
      SiPostgresql,
      IconBrandFramerMotion,
      SiHono,
    ],
    image: "/techtalkies.webp",
    category: "Product",
  },

  {
    name: "Waiting List ",
    description: "Designed & coded waiting list page for doscsmin",
    deployed: "docsmin.com",
    github: null,
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      SiPostgresql,
      IconBrandFramerMotion,
    ],
    image: "/docsmin.webp",
    category: "Revamp",
  },

  {
    name: "DevTerminus",
    description:
      "Get to know about your skill set & how much are your replacable from Ai",
    deployed: "dev-terminus.10xdevlab.in/",
    github: "https://github.com/Kashyap1ankit/dev-terminus",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      SiPostgresql,
      IconBrandFramerMotion,
    ],
    image: "/devterminus.webp",
    category: "Product",
  },

  {
    name: "Docsmin Landing",
    description:
      "Unresponsive landing page designed & coded for a file sharing platform",
    deployed: "docsmin-landing.vercel.app/",
    github: "https://github.com/Kashyap1ankit/docsmin-landing",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      IconBrandFramerMotion,
    ],
    image: "/docsmin-landing.webp",
    category: "Revamp",
  },

  {
    name: "Gh-Activity-Card",
    description:
      "Npm package that helps developers to showcase their Github contribution in last 1 year. Developed backend for this & integrated frontend",
    deployed: "npmjs.com/package/gh-activity-card",
    github: "https://github.com/Kashyap1ankit/gh-activity-card",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      IconBrandNodejs,
      SiExpress,
    ],
    image: "/gh.webp",
    category: "Product",
  },

  {
    name: "Puch Ai",
    description:
      "Implemented a cleaner UI, enhanced content structure, and improved user experience by highlighting core features, user benefits, and call-to-action elements. The new layout better communicates the products value proposition and aligns with current design trends, resulting in a more engaging and conversion-optimized landing page.",
    deployed: "puch.10xdevlab.in",
    github: "https://github.com/Kashyap1ankit/pai-revamp",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      IconBrandFramerMotion,
    ],
    image: "/puch.webp",
    category: "Revamp",
  },

  {
    name: "Vidstash",
    description:
      "Created the ui & authentication part of a video uploading platform where user can come .. create accounts and then upload videos and can share it to friends either publically or privately",
    deployed: "vidstash.10xdevlab.in/",
    github: "https://github.com/Kashyap1ankit/vidstash",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      SiPostgresql,
    ],
    image: "/vidstash.webp",
    category: "Revamp",
  },

  {
    name: "TechKareer Revamp",
    description:
      "Implemented a cleaner UI, enhanced content structure, and improved user experience by highlighting core features, user benefits, and call-to-action elements. The new layout better communicates the products value proposition and aligns with current design trends, resulting in a more engaging and conversion-optimized landing page.",
    deployed: "techkareer.10xdevlab.in",
    github: "https://github.com/Kashyap1ankit/techkareer-revamp",
    tech: [
      IconBrandNextjs,
      IconBrandTypescript,
      IconBrandTailwind,
      IconBrandFramerMotion,
    ],
    image: "/techkareer.webp",
    category: "Revamp",
  },
  {
    name: "PayUsVia",
    description:
      "Platform where user signup and they can do transactions with the existing user on website.",
    deployed: "paytm-frontend-ankits-projects-5c12be11.vercel.app",
    github: "https://github.com/Kashyap1ankit/paytm-frontend",
    tech: [
      IconBrandReact,
      IconBrandTailwind,
      IconBrandNodejs,
      SiExpress,
      IconBrandMongodb,
    ],
    image: "/paytm.webp",
    category: "Product",
  },
  {
    name: "Airbnb Clone",
    description:
      "A hotel booking wesbite similar to airbnb. User can signup and see the listings and also see & give reviews on experience",
    deployed: null,
    github: "https://github.com/Kashyap1ankit/Airbnb",
    tech: [SiExpress, IconBrandCss3, IconBrandNodejs, IconBrandMongodb, SiEjs],
    image: "/airbnb.webp",
    category: "Product",
  },
];
