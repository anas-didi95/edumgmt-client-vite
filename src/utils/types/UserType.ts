import { SearchType } from "./CommonType";

export type UserSearchType = SearchType & {
  userId: string
}

export type UserSearchResultType = {
  resultList: [
    {
      id: string;
      userId: string;
      name: string;
      roles: string[];
    },
  ];
  pagination: {
    page: number;
    totalPages: number;
    recordsPerPage: number;
    totalRecords: number;
  };
};
