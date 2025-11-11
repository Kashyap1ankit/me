import {
  Cousine,
  Bricolage_Grotesque,
  Manrope,
  Hanken_Grotesk,
} from "next/font/google";

export const gabarito = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const cousine = Cousine({
  weight: "400",
  subsets: ["greek"],
});

export const manrope = Manrope({
  subsets: ["cyrillic"],
});

export const hanken = Hanken_Grotesk({
  subsets: ["cyrillic-ext"],
});
