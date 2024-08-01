import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState = {
  isLogin: false,
  userID: undefined,
  name: undefined,
  gender: undefined,
  point: undefined,
  time: undefined,
  hobby: undefined,
  email: undefined,
};
export const useLoginStore = create(
  devtools((set) => ({
    // isLogin: false,
    // userID: undefined,
    // name: undefined,
    initialState,
    setLogin: (userData) =>
      set({
        ...initialState,
        isLogin: true,
        userID: userData.userID,
        name: userData.name,
        gender: userData.gender,
        point: userData.point,
        hobby: userData.hobby,
        age: userData.age,
        email: userData.email,
      }),
    setLogout: () => set({ ...initialState }),
  }))
);
