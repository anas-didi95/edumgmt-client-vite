import { FC } from "react";

const Alert: FC<unknown> = () => (
  <div className="notification alert--position">
    <p className="content">Error</p>
    <button className="delete"></button>
    <p className="content">
      Record not found! Ref[asdfasdf-adsfsafd-asdfsadf-asdfsafdasf]
    </p>
  </div>
);

export default Alert;
