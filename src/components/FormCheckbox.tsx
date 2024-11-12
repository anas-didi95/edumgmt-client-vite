import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyleStatus } from "../utils/types/CommonType";

interface IFormCheckbox {
  register: UseFormRegisterReturn;
  value: string;
  label?: string;
  remark?: string;
  message?: {
    status: StyleStatus;
    value: string;
  };
}

const FormCheckbox: FC<IFormCheckbox> = ({
  register,
  value,
  label,
  remark,
  message,
}) => (
  <div className="field">
    {!!label && <label className="label">{label}</label>}
    <div className="control">
      <label className="checkbox">
        <input {...register} type="checkbox" value={value} />
        {!!remark && <span>&nbsp;{remark}</span>}
      </label>
    </div>
    {!!message && <p className={`help ${message.status}`}>{message.value}</p>}
  </div>
);

export default FormCheckbox;
