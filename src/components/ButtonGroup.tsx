import { FC } from "react"

interface IButtonGroup {
  buttonList: {
    label: string
    type?: "success" | "light"
    onClick?: () => void
  }[]
}

const ButtonGroup: FC<IButtonGroup> = ({ buttonList }) => (
  <div className="buttons is-right">
    {buttonList.map(({ label, type, onClick }, i) => (
      <button key={`${label}${type}${i}`} className={`button ${!!type && "is-" + type}`} onClick={onClick}>{label}</button>
    ))}
  </div>
)

export default ButtonGroup
