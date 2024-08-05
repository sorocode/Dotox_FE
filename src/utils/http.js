import { QueryClient } from "@tanstack/react-query";
import { apiRequester } from "./axiosConfig";

export const queryClient = new QueryClient();
const API_URL = import.meta.env.VITE_API_URL;

// 로그인
// FIXME:실제 API로 변경 필요
export const login = async (userID) => {
  const response = await apiRequester.post("/login", userID);
  return response.data;
};

// 로그인한 유저 정보 가져오기
export const fetchUserInfo = async (userID) => {
  const response = await apiRequester.get(API_URL + `/${userID}/myPage`);
  return response.data;
};

// 친구 목록에 추가
export const addFriend = async (myid, friendId) => {
  const response = await apiRequester.post(API_URL + "/friendlist/post", {
    id1: myid,
    id2: friendId,
  });
  return response.data;
};

// 친구들의 랭킹 조회
export const searchRanking = async (accountId) => {
  const response = await apiRequester.get(
    API_URL + `/friendlist/friends/ranking/${accountId}`
  );
  return response.data;
};

// 친구 목록 조회
export const searchAllFriedns = async () => {
  const response = await apiRequester.get(API_URL + "/friendlist/findall");
  return response.data;
};

// 특정 사용자의 친구 목록 조회
export const searchFriendsById = async (id) => {
  const response = await apiRequester.get(
    API_URL + `/friendlist/findFriendListById1?id1=${id}`
  );
  return response.data;
};

// 친구 목록에서 삭제
export const deleteFriend = async (myid, friendId) => {
  const response = await apiRequester.delete(API_URL + "/friendlist/delete", {
    id1: myid,
    id2: friendId,
  });
  return response.data;
};

// 사용자 정보 업데이트(취미정보 변경)
// FIXME:실제 API로 변경 필요
export const updataUserInfo = async ({ id, hobby }) => {
  const response = await apiRequester.post(API_URL + `/${id}/userInfo`, {
    hobby,
  });
  return response.data;
};

// 요청 받은 id로 친구 요청 조회
export const findFriendRequestByRequestedId = async (requestedId) => {
  const response = await apiRequester.get(
    API_URL + `/friendrequest/findFriendRequestByRequestedId?=${requestedId}`
  );
  return response.data;
};
// 요청 ID로 친구 요청 조회
export const findFriendRequestByRequestId = async (requestId) => {
  const response = await apiRequester.get(
    API_URL + `/api/friendrequest/findFriendRequestByRequestId?=${requestId}`
  );
  return response.data;
};

// 친구 요청 삭제
export const deleteFriendRequest = async (id) => {
  const response = await apiRequester.delete(
    API_URL + "/friendrequest/delete",
    id
  );
  return response.data;
};
// 친구 요청 수락
// id는 1이나 2로 아무렇게나 지정하면 됨
export const acceptFriendRequest = async (id, id1, id2) => {
  const response = await apiRequester.delete(
    API_URL + "/friendrequest/accept",
    { id, id1, id2 }
  );
  return response.data;
};
