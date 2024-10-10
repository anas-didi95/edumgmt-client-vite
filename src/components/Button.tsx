import { FC } from "react";

export interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
  color?: "success" | "light";
  onClick?: () => void;
}

const Button: FC<IButton> = ({ type, label, color, onClick }) => (
  <button
    type={type}
    className={`button ${!!color && "is-" + color}`}
    onClick={onClick}>
    {label}
  </button>
);

export default Button;
