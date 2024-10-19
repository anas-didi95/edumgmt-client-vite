import type { UserSearchResultType, UserSearchType } from "../types/UserType";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "./AxiosService";

const CONTEXT_PATH = import.meta.env.VITE_APP_EDUMGMT_URL;
const BASE_PATH = "/user";

const useSearchUserList = (
  param: UserSearchType = { page: 1, size: 10, userId: "", name: "" },
) => {
  const axios = useAxios(CONTEXT_PATH, BASE_PATH);
  const [search, setSearch] = useState<UserSearchType>({ ...param });
  const [enabled, setEnabled] = useState(false);
  const queryKey = useMemo(() => {
    return ["users", search.page, search.size, search.userId, search.name];
  }, [search.page, search.size, search.userId, search.name]);
  const { data } = useQuery({
    enabled,
    queryKey,
    queryFn: async () => {
      try {
        const response = await axios.get(
          `?page=${search.page}&size=${search.size}&userId=${search.userId}&name=${search.name}`,
        );
        const responseBody: UserSearchResultType = response.data;
        return responseBody;
      } catch (error) {
        console.error("Fail to search user!", error);
        return Promise.resolve();
      }
    },
  });

  const execute = (param: UserSearchType) => {
    setSearch((prev) => ({ ...prev, ...param }));
    if (!enabled) {
      setEnabled(true);
    }
  };

  return { search, data, queryKey, execute };
};

export default { useSearchUserList };
