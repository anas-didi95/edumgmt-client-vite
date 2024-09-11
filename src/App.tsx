import React from "react";
import "./styles/app.scss";
import PWABadge from "./PWABadge";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";

const App: React.FC<unknown> = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <section className="section">
        <div className="container">
          <Breadcrumb />
          <br />
          <Card />
        </div>
      </section>
    </main>
    <PWABadge />
  </>
);

export default App;
