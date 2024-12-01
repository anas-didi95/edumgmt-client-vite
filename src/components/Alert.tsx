import { FC } from "react";
import { useAlertStore } from "../stores/alert-store";
import { TStyleStatus } from "../types/common-type";

const AlertTitle: { [key in TStyleStatus]: string } = {
  "is-success": "Success",
  "is-warning": "Warning",
  "is-danger": "Error",
};

const Alert: FC<unknown> = () => {
  const { isShow, message, status } = useAlertStore((state) => state.data);
  const clearMessage = useAlertStore((state) => state.clearMessage);

  return (
    <>
      {isShow && (
        <div className={`notification ${status ?? ""} alert--position`}>
          <p className="is-size-5 has-text-weight-bold">
            {status ? AlertTitle[status] : "Info"}
          </p>
          <button className="delete" onClick={clearMessage}></button>
          <p className="content">{message}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
