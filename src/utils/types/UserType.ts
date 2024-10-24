import { SearchType } from "./CommonType";

export type UserSearchType = SearchType & {
  userId: string;
  name: string;
};

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

export type UserFormType = {
  id: string;
  userId: string;
  name: string;
  roles: string[];
  isDeleted: boolean;
  version: number;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
};
