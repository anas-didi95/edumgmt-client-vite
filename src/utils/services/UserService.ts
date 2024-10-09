import axios from "axios";
import type { UserSearchType } from "../types/UserType";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_EDUMGMT_URL}/user`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer ...",
  },
});

const searchUserList = async (
  page: number,
  size: number,
  userId: string,
): Promise<UserSearchType> => {
  try {
    const response = await api.get(
      `?page=${page}&size=${size}&userId=${userId}`,
    );
    const responseBody: UserSearchType = response.data;
    return responseBody;
  } catch (error) {
    console.log("Fail to search user!", error);
    return Promise.reject();
  }
};

export default { searchUserList };
