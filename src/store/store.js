import { create } from "zustand";
import { devtools } from "zustand/middleware";

// 초기 상태 정의
const initialLoginState = {
  isLogin: false,
  userID: undefined,
  name: undefined,
  gender: undefined,
  point: undefined,
  time: undefined,
  hobby: undefined,
  email: undefined,
};

// zustand 스토어 생성
export const useLoginStore = create(
  devtools((set) => ({
    ...initialLoginState,
    setLogin: (userData) =>
      set({
        isLogin: true,
        userID: userData.userID,
        name: userData.name,
        gender: userData.gender,
        point: userData.point,
        time: userData.time,
        hobby: userData.hobby,
        email: userData.email,
      }),
    setLogout: () => set(initialLoginState),
  }))
);
