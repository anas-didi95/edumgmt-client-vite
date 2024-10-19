import { StyleStatus } from "./CommonType";

export type AlertStoreType = {
  data: {
    isShow: boolean;
    message: string;
    status?: StyleStatus;
  };
  setMessage: (message: string, statue: StyleStatus) => void;
  clearMessage: () => void;
};
