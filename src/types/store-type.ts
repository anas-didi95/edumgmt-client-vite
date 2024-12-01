import { TStyleStatus } from "./common-type";

export type TAlertStoreType = {
  data: {
    isShow: boolean;
    message: string;
    status?: TStyleStatus;
  };
  setMessage: (message: string, statue: TStyleStatus) => void;
  clearMessage: () => void;
};
