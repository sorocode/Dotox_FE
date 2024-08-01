import { http, HttpResponse } from "msw";
import { mockUsers } from "./mockData";

export const handlers = [
  // 로그인
  http.post("/api/login", async ({ request }) => {
    const loginId = await request.json();
    const loginUser = mockUsers.find((item) => loginId === item.userID);
    return HttpResponse.json(loginUser);
  }),
];
