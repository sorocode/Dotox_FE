import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useLoginStore = create(
  devtools((set) => ({
    isLogin: false,
    userID: undefined,
    name: undefined,
    setLogin: (userData) =>
      set({ isLogin: true, userID: userData.userID, name: userData.name }),
    setLogout: () =>
      set({ isLogin: false, userID: undefined, name: undefined }),
  }))
);
