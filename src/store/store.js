import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useLoginStore = create(
  devtools((set) => ({
    isLogin: false,
    userId: undefined,
    setLogin: (userId) => set({ isLogin: true, userId: userId }),
    setLogout: () => set({ isLogin: false, userId: undefined }),
  }))
);
