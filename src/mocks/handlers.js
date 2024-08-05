import { http, HttpResponse } from "msw";
import { mockUsers } from "./mockData";

export const handlers = [
  // 로그인
  http.post("/login", async ({ request }) => {
    const loginID = await request.json();
    const loginUser = mockUsers.find(
      (item) => item.userID === parseInt(loginID)
    );
    return HttpResponse.json(loginUser);
  }),

  // 로그인한 유저 정보 가져오기
  http.get("/:userID/myPage", ({ params }) => {
    const userID = params.userID;

    const user = mockUsers.find((item) => item.userID === parseInt(userID));
    return HttpResponse.json(user);
  }),

  // 취미 선택(사용자 정보 업데이트)
  http.post("/:id/userinfo", async ({ params, request }) => {
    const { id } = params;
    const loginUser = mockUsers.find((item) => item.userID === parseInt(id));
    const requestBody = await request.json();
    console.log(
      `Captured a "POST /api/${id}/userInfo" request and its request changes ${loginUser.name} hobby into ${requestBody}`
    );
    return HttpResponse.json(requestBody, { status: 201 });
  }),
];
