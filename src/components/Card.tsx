import { FC, ReactNode } from "react";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card: FC<ICard> = ({ title, children }) => (
  <div className="card">
    {!!title && (
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
    )}
    <div className="card-content">{children}</div>
  </div>
);

export default Card;
