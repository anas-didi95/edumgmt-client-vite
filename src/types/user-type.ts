import { TSearchType } from "./common-type";

export type TUserSearchType = TSearchType & {
  userId: string;
  name: string;
};

export type TUserSearchResultType = {
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

export type TUserFormType = {
  id: string;
  userId: string;
  name: string;
  password: string;
  confirmPassword: string;
  roles: string[];
  isDeleted: boolean;
  version: number;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
};
