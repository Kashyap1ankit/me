"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useActiveTab } from "@/store/store";
import { tabType } from "@/lib/constant";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const pathname = usePathname();
  const { setActiveTab } = useActiveTab();

  React.useEffect(() => {
    setActiveTab(pathname as tabType);
  }, [pathname]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
