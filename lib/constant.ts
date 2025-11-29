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
  IconProps,
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
import {
  GitMergeIcon,
  Home04Icon,
  VisualStudioCodeIcon,
} from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react";

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
    icon: Home04Icon,
    icon2: Home04Icon,
    link: "/",
    value: "/",
  },
  {
    name: "Project",
    icon: VisualStudioCodeIcon,
    icon2: VisualStudioCodeIcon,
    link: "/projects",
    value: "/projects",
  },
  {
    name: "OS",
    icon: GitMergeIcon,
    icon2: GitMergeIcon,
    link: "/contributions",
    value: "/contributions",
  },
];

export interface navLinksType {
  name: string;
  icon: IconSvgElement;
  icon2: IconSvgElement;
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
    name: "Yuga",
    description: "Developed multiple pages ui in the 7-day long freelancing. ",
    deployed: "www.joinyuga.com/",
    github: null,
    tech: [IconBrandNextjs, IconBrandTypescript, IconBrandTailwind],
    image: "/yuga.webp",
    category: "Freelancing",
  },

  {
    name: "Logofy",
    description:
      "Helps to generate professional logos for their company. Describe in few words what you want in the logo and get it as svg",
    deployed: "logofy.10xdevlab.in",
    github: null,
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

export const contriubutionData = [
  {
    organisation: "100xdev",
    logo: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.3698267942851394.jpg",
    organisation_github: "https://github.com/code100x",
    contribution: [
      {
        title: "Created the notification system & web app ",
        link: "https://github.com/code100x/job-board/pull/544",
      },
      {
        title: "Fixed the overall performace of the website",
        link: "https://github.com/code100x/job-board/pull/557",
      },
      {
        title: "Created the bookmark functionality for saving job postings",
        link: "https://github.com/code100x/job-board/pull/518",
      },
      {
        title: "Added the checks before deleting account ensuring security",
        link: "https://github.com/code100x/job-board/pull/513",
      },
      {
        title: "Fixed Bug for account deletion",
        link: "https://github.com/code100x/job-board/pull/508",
      },
    ],
  },
  {
    organisation: "Sanity",
    logo: "https://www.toornify.com/sanity_esports_logo.jpg",
    organisation_github: "https://github.com/dinxsh/sanity",
    contribution: [
      {
        title: "Revamped the contact page",
        link: "https://github.com/dinxsh/sanity/pull/156",
      },
      {
        title: "Created the notification Dialog ",
        link: "https://github.com/dinxsh/sanity/pull/136",
      },
      {
        title: "Fixed dependency issue in codebase",
        link: "https://github.com/dinxsh/sanity/pull/134",
      },
      {
        title: "Revamped the teams page & added search functionality",
        link: "https://github.com/dinxsh/sanity/pull/150",
      },
      {
        title: "Added husky & pretteir for formatting code in development",
        link: "https://github.com/dinxsh/sanity/pull/151",
      },
      {
        title: "Added the backend logic for contact email",
        link: "https://github.com/dinxsh/sanity/pull/159",
      },
      {
        title: "Ensured Authorization on tournament & bracket creation",
        link: "https://github.com/dinxsh/sanity/pull/186",
      },
      {
        title: "Fixed the responsiveness & few bugs on landing page",
        link: "https://github.com/dinxsh/sanity/pull/182",
      },
      {
        title: "Fixed the navbar scroll white line issue",
        link: "https://github.com/dinxsh/sanity/pull/172",
      },
      {
        title: "Changed the join community btn to signup button",
        link: "https://github.com/dinxsh/sanity/pull/171",
      },
      {
        title: "Changed the icon & removed the tick/cross button",
        link: "https://github.com/dinxsh/sanity/pull/170",
      },
      {
        title: "Increased the accesibility from 83 to 94",
        link: "https://github.com/dinxsh/sanity/pull/163",
      },
    ],
  },
];

export const experienceData = [
  {
    company: "Freelancing",
    role: "Fullstack Developer",
    timeframe: "March 2025 - Current",
    about: [
      "Delivered end-to-end freelance projects for clients, building responsive web and mobile applications using Next.js and RN.",
      "Converted Figma designs into polished, high-performance user interfaces optimized for all devices",
      "Integrated scalable backends with MongoDB, Prisma, and AWS S3 for data management and media storage",
      "Implemented secure authentication and user management",
    ],

    image: "/stealth.jpeg",
  },
  {
    company: "SparkStrand",
    role: "Fullstack Intern",
    timeframe: "July 2024 - Oct 2024",
    about: [
      "Collaborated in a team of 7 to develop a full-stack web application using Next.js and MongoDB",
      "Utilized tech like Prisma, AWS S3, and Clerk to create multiple API routes",
      "Transformed pixel-perfect Figma designs into responsive, high-quality web pages",
    ],
    image: "/sparkstand.jpg",
  },
  {
    company: "Edtech Startup",
    role: "TA Intern",
    timeframe: "Nov 2023 - Mar 2024",
    about: [
      "Resolved over 1,050 MERN stack queries for students, providing in-depth coding support",
      "Assisted more than 5,000 students throughout their coding journeys",
      "Achieved a 4.97/5 rating during my internship",
    ],
    image: "/stealth.jpeg",
  },
];
