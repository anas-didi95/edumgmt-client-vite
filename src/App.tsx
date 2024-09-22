import { FC } from "react";
import "./styles/app.scss";
import PWABadge from "./PWABadge";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";
import FormInput from "./components/FormInput";
import ButtonGroup from "./components/ButtonGroup";
import Table from "./components/Table";

const App: FC<unknown> = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <section className="section">
        <div className="container">
          <Breadcrumb />
          <br />
          <Card title="Search User">
            <div className="columns">
              <div className="column is-4">
                <FormInput label="User ID" type="text" />
              </div>
              <div className="column is-4">
                <FormInput label="Name" type="text" />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <ButtonGroup buttonList={[
                  { label: "Reset" },
                  { label: "Search", type: "success" }
                ]} />
              </div>
            </div>
          </Card>
          <br />
          <Card title="">
            <Table headerList={["Head 1", "Head 2"]}>
              <tr>
                <td>Val 1</td>
                <td>Val 2</td>
              </tr>
              <tr>
                <td>Val 3</td>
                <td>Val 4</td>
              </tr>
            </Table>
          </Card>
        </div>
      </section>
    </main>
    <PWABadge />
  </>
);

export default App;
