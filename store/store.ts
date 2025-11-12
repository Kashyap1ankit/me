import { tabType } from "@/lib/constant";
import { create } from "zustand";

interface useActiveTabType {
  activeTab: tabType;
  setActiveTab: (val: tabType) => void;
}

export const useActiveTab = create<useActiveTabType>((set) => ({
  activeTab: "/",
  setActiveTab: (val: tabType) => set(() => ({ activeTab: val })),
}));
