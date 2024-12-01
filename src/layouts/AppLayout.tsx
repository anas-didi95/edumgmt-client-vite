import { FC, ReactNode } from "react";
import Alert from "../components/Alert";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/Navbar";
import PWABadge from "../PWABadge";

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
