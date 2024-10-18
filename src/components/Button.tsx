import { FC, MouseEvent } from "react";
import { StyleStatus } from "../utils/types/CommonType";

export interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
  color?: StyleStatus;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Button: FC<IButton> = ({ type, label, color, onClick }) => (
  <button
    type={type}
    className={`button ${!!color && color}`}
    onClick={onClick}>
    {label}
  </button>
);

export default Button;
