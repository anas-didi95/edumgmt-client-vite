import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyleStatus } from "../utils/types/CommonType";

interface IFormInput {
  register: UseFormRegisterReturn;
  label: string;
  type: "text";
  placeholder?: string;
  message?: {
    status: StyleStatus;
    value: string;
  };
}

const FormInput: FC<IFormInput> = ({
  register,
  label,
  type,
  placeholder,
  message,
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        {...register}
        className="input"
        type={type}
        placeholder={placeholder ?? label}
      />
    </div>
    {!!message && <p className={`help ${message.status}`}>{message.value}</p>}
  </div>
);

export default FormInput;
