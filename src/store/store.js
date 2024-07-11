import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useLoginStore = create(
  devtools((set) => ({
    isLogin: false,
    setLogin: () => set({ isLogin: true }),
    setLogout: () => set({ isLogin: false }),
  }))
);
