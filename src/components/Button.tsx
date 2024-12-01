import { FC, MouseEvent } from "react";
import { TStyleStatus } from "../types/common-type";

export interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  color?: TStyleStatus;
}

const Button: FC<IButton> = ({ type, label, color, onClick }) => (
  <button type={type} className={`button ${color ?? ""}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
