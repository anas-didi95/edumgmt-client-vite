import { FC } from "react"

interface IButtonGroup {
  buttonList: {
    label: string
    type?: "success" | "light"
  }[]
}

const ButtonGroup: FC<IButtonGroup> = ({ buttonList }) => (
  <div className="buttons is-right">
    {buttonList.map(({ label, type }, i) => (
      <button key={`${label}${type}${i}`} className={`button ${!!type && "is-" + type}`}>{label}</button>
    ))}
  </div>
)

export default ButtonGroup
