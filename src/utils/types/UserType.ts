export type UserSearchType =
  {
    resultList: [
      {
        id: string
        userId: string,
        name: string,
        roles: string[]
      }
    ],
    pagination: {
      page: number,
      totalPages: number,
      recordsPerPage: number,
      totalRecords: number
    }
  }
