import { FC, MouseEvent } from "react";
import { StyleStatus } from "../utils/types/CommonType";

export interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  color?: StyleStatus;
}

const Button: FC<IButton> = ({ type, label, color, onClick }) => (
  <button type={type} className={`button ${color ?? ""}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
