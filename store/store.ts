import { tabType } from "@/lib/constant";
import { create } from "zustand";

interface useActiveTabType {
  activeTab: tabType;
  setActiveTab: (val: tabType) => void;
}

interface useActiveAudioType {
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
}

export const useActiveTab = create<useActiveTabType>((set) => ({
  activeTab: "/",
  setActiveTab: (val: tabType) => set(() => ({ activeTab: val })),
}));

export const useActiveAudio = create<useActiveAudioType>((set) => ({
  isPlaying: false,
  setIsPlaying: (val: boolean) => set(() => ({ isPlaying: val })),
}));
