import React from "react";
import "./styles/app.scss"
import PWABadge from "./PWABadge";

const App: React.FC<unknown> = () => (
  <>
    <section className="section">
      <div className="container">
        <h1 className="title">
          Hello World
        </h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
      </div>
      <div className="container">
        <div className="buttons">
          <button className="button is-primary">Primary</button>
          <button className="button is-link">Link</button>
        </div>

        <div className="buttons">
          <button className="button is-info">Info</button>
          <button className="button is-success">Success</button>
          <button className="button is-warning">Warning</button>
          <button className="button is-danger">Danger</button>
        </div>
      </div>
    </section>
    <PWABadge />
  </>
)

export default App;
