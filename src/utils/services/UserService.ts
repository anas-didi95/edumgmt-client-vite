import axios from "axios";
import type { UserSearchResultType, UserSearchType, } from "../types/UserType";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_EDUMGMT_URL}/user`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer ..."
  },
});

const useSearchUserList = (param: UserSearchType = { page: 1, size: 10, userId: "" }) => {
  const [search, setSearch] = useState<UserSearchType>({ ...param })
  const { data } = useQuery({
    queryKey: [
      "UserService.searchUserList",
      search.page,
      search.size,
      search.userId,
    ],
    queryFn: async () => {
      try {
        const response = await api.get(
          `?page=${search.page}&size=${search.size}&userId=${search.userId}`,
        );
        const responseBody: UserSearchResultType = response.data;
        return responseBody;
      } catch (error) {
        console.log("Fail to search user!", error);
        return Promise.reject();
      }
    }
  });

  return { search, setSearch, data }
}

export default { useSearchUserList };
