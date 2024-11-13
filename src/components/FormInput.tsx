import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyleStatus } from "../utils/types/CommonType";

interface IFormInput {
  state: {
    register: UseFormRegisterReturn;
    error?: FieldError;
    isMandatory?: boolean;
  };
  label: string;
  type: "text" | "password";
  placeholder?: string;
  message?: {
    status: StyleStatus;
    value: string;
  };
}

const FormInput: FC<IFormInput> = ({
  state: { register, error, isMandatory = false },
  label,
  type,
  placeholder,
  message,
}) => (
  <div className="field">
    <label className="label">
      {label}
      {isMandatory && <span className="has-text-danger">&nbsp;*</span>}
    </label>
    <div className="control">
      <input
        {...register}
        className={`input ${!!error?.message && "is-danger"}`}
        type={type}
        placeholder={placeholder ?? label}
      />
    </div>
    {!!error?.message && <p className="help is-danger">{error.message}</p>}
    {!!message && <p className={`help ${message.status}`}>{message.value}</p>}
  </div>
);

export default FormInput;
