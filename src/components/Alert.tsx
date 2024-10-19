import { FC } from "react";
import { useAlertStore } from "../utils/store";

const Alert: FC<unknown> = () => {
  const { isShow, message, status } = useAlertStore((state) => state.data);
  const clearMessage = useAlertStore((state) => state.clearMessage);

  return (
    <>
      {isShow && (
        <div className={`notification ${status ?? ""} alert--position`}>
          <p className="content">Error</p>
          <button className="delete" onClick={clearMessage}></button>
          <p className="content">{message}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
