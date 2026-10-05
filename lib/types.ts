import { IconSvgElement } from "@hugeicons/react";

export interface navLinksType {
  name: string;
  icon: IconSvgElement;
  icon2: IconSvgElement;
  link: string;
  value: tabType;
}

export type tabType = "/" | "/blog" | "/projects" | "/contributions";

export type blogtagType = { label: string; value: string }[] | null;

export interface blogDataType {
  title: string;
  description: string;
  id: string;
  tag: blogtagType;
  shortDes: string;
  createdAt: number;
}
