import { http, HttpResponse } from "msw";
import { mockUsers } from "./mockData";

export const handlers = [
  // An example handler
  http.get("/api/userId", (userId) => {
    return HttpResponse.json(mockUsers[userId]);
  }),
];
