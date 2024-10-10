import { FC } from "react";
import Button, { IButton } from "./Button";

interface IButtonGroup {
  buttonList: IButton[];
}

const ButtonGroup: FC<IButtonGroup> = ({ buttonList }) => (
  <div className="buttons is-right">
    {buttonList.map(({ type, label, color, onClick }, i) => (
      <Button
        key={`${label}${type}${i}`}
        type={type}
        color={color}
        onClick={onClick}
        label={label}
      />
    ))}
  </div>
);

export default ButtonGroup;
