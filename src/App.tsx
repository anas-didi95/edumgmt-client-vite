import React from "react";
import "./styles/app.scss";
import PWABadge from "./PWABadge";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";

const App: React.FC<unknown> = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <section className="section">
        <div className="container">
          <Breadcrumb />
        </div>
      </section>
    </main>
    <PWABadge />
  </>
);

export default App;
