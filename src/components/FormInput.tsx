import React from "react"

interface IFormInput {
  label: string
  type: "text"
  placeholder?: string
  message?: {
    status: "success" | "danger" | "warning",
    value: string
  }
}

const FormInput: React.FC<IFormInput> = ({ label, type, placeholder, message }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input className="input" type={type} placeholder={placeholder ?? label} />
    </div>
    {!!message && (
      <p className={`help is-${message.status}`}>{message.value}</p>
    )}
  </div>
)

export default FormInput
