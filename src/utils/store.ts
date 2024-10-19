import { create } from "zustand";
import { AlertStoreType } from "./types/StoreType";

const useAlertStore = create<AlertStoreType>((set) => ({
  data: {
    isShow: false,
    message: "",
    status: undefined,
  },
  setMessage: (message, status) =>
    set((state) => ({
      data: { ...state.data, isShow: true, message, status },
    })),
  clearMessage: () =>
    set((state) => ({
      data: { ...state.data, isShow: false, message: "", status: undefined },
    })),
}));

export { useAlertStore };
