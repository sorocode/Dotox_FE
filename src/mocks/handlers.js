import { http, HttpResponse } from "msw";
import { mockUsers } from "./mockData";

export const handlers = [
  // 로그인
  http.post("/api/login", async ({ request }) => {
    const loginID = await request.json();
    const loginUser = mockUsers.find((item) => loginID === item.userID);
    return HttpResponse.json(loginUser);
  }),

  // 로그인한 유저 정보 가져오기
  http.get("/api/:userID", ({ params }) => {
    const userID = params.userID;
    const user = mockUsers.find((user) => user.userID === userID);
    return HttpResponse.json(user);
  }),
];
