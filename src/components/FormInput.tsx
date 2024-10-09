import { FC, FormEvent } from "react"

interface IFormInput {
  label: string
  type: "text"
  placeholder?: string
  message?: {
    status: "success" | "danger" | "warning",
    value: string
  }
  onChange?: (e: FormEvent<HTMLInputElement>) => void
}

const FormInput: FC<IFormInput> = ({ label, type, placeholder, message, onChange }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input className="input" type={type} placeholder={placeholder ?? label} onChange={onChange} />
    </div>
    {!!message && (
      <p className={`help is-${message.status}`}>{message.value}</p>
    )}
  </div>
)

export default FormInput
