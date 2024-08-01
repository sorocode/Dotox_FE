import { QueryClient } from "@tanstack/react-query";
import { apiRequester } from "./axiosConfig";

export const queryClient = new QueryClient();

// 로그인
export const login = async (userID) => {
  const req = await apiRequester.post("api/login", userID);
  return req.data;
};

// 로그인한 유저 정보 가져오기
export const fetchUserInfo = async (userID) => {
  const req = await apiRequester.get(`api/${userID}`, userID);
  return req.data;
};
