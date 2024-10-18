import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";
import PWABadge from "../PWABadge";
import Breadcrumb from "../components/Breadcrumb";
import Alert from "../components/Alert";

interface IAppLayout {
  children: ReactNode;
  breadcrumbList: string[];
}
const AppLayout: FC<IAppLayout> = ({ children, breadcrumbList }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="container">
        <Alert />
      </div>
      <section className="section">
        <div className="container">
          <Breadcrumb breadcrumbList={breadcrumbList} />
          <br />
          {children}
        </div>
      </section>
    </main>
    <PWABadge />
  </>
);

export default AppLayout;
