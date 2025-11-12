import { DiRedis } from "react-icons/di";
import { RiBearSmileFill } from "react-icons/ri";
import {
  Icon,
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
