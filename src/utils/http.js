import { QueryClient } from "@tanstack/react-query";
import { apiRequester } from "./axiosConfig";

export const queryClient = new QueryClient();
const SERVER_URL = import.meta.env.VITE_API_URL;

// // 네이버 로그인
// export const naverLogin = async () => {
//   const req = await apiRequester.get(
//     SERVER_URL + "/oauth2/authorization/naver"
//   );
//   return req.data;
// };
// // 구글 로그인
// export const googleLogin = async () => {
//   const req = await apiRequester.get(
//     SERVER_URL + "/oauth2/authorization/google"
//   );
//   return req.data;
// };

//소셜 로그인 시 인가 코드 전달
export const sendCode = async (data) => {
  const response = await apiRequester.post(SERVER_URL + "/oauth2/token", data);
  return response.data;
};

// 로그인한 유저 정보 가져오기
export const fetchUserInfo = async (userID) => {
  const req = await apiRequester.get(`api/${userID}`, userID);
  return req.data;
};
