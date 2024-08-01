import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useLoginStore = create(
  devtools((set) => ({
    isLogin: false,
    userID: undefined,
    setLogin: (userID) => set({ isLogin: true, userID: userID }),
    setLogout: () => set({ isLogin: false, userID: undefined }),
  }))
);
