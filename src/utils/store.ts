import { create } from "zustand";
import { TAlertStoreType } from "../types/store-type";

const useAlertStore = create<TAlertStoreType>((set) => ({
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
