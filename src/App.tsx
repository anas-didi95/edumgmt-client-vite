import React from "react";
import "./styles/app.scss";
import PWABadge from "./PWABadge";
import Navbar from "./components/Navbar";

const App: React.FC<unknown> = () => (
  <>
    <header>
      <Navbar />
    </header>
    <PWABadge />
  </>
);

export default App;
