import { FC, useState } from "react";
import "./styles/app.scss";
import PWABadge from "./PWABadge";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";
import FormInput from "./components/FormInput";
import ButtonGroup from "./components/ButtonGroup";
import Table from "./components/Table";
import UserService from "./utils/services/UserService";
import { UserSearchType } from "./utils/types/UserType";

const App: FC<unknown> = () => {
  const [searchForm, setSearchForm] = useState<UserSearchType>({
    page: 1,
    size: 10,
    userId: "",
  });
  const { setSearch, data } = UserService.useSearchUserList({ ...searchForm });

  return (
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
              <form>
                <div className="columns">
                  <div className="column is-4">
                    <FormInput
                      label="User ID"
                      type="text"
                      onChange={(e) =>
                        setSearchForm((prev) => ({
                          ...prev,
                          userId: (e.target as HTMLInputElement).value,
                        }))
                      }
                    />
                  </div>
                  <div className="column is-4">
                    <FormInput label="Name" type="text" />
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <ButtonGroup
                      buttonList={[
                        { type: "reset", label: "Reset" },
                        {
                          type: "submit",
                          label: "Search",
                          color: "success",
                          onClick: (e) => {
                            e.preventDefault();
                            setSearch({ ...searchForm });
                          },
                        },
                      ]}
                    />
                  </div>
                </div>
              </form>
            </Card>
            {!!data && !!data.resultList && (
              <>
                <br />
                <Card title="">
                  <Table headerList={["No.", "User Id", "Name"]}>
                    {data.resultList.map((result, idx) => (
                      <tr key={result.id}>
                        <td>{idx + 1}</td>
                        <td>{result.userId}</td>
                        <td>{result.name}</td>
                      </tr>
                    ))}
                  </Table>
                </Card>
              </>
            )}
          </div>
        </section>
      </main>
      <PWABadge />
    </>
  );
};

export default App;
