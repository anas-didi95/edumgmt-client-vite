import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import "../styles/app.scss";
import Card from "../components/Card";
import FormInput from "../components/FormInput";
import ButtonGroup from "../components/ButtonGroup";
import Table from "../components/Table";
import UserService from "../utils/services/UserService";
import { UserSearchType } from "../utils/types/UserType";
import AppLayout from "../layouts/AppLayout";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [searchForm, setSearchForm] = useState<UserSearchType>({
    page: 1,
    size: 10,
    userId: "",
  });
  const { setSearch, data } = UserService.useSearchUserList({ ...searchForm });

  return (
    <AppLayout breadcrumbList={["User", "Search"]}>
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
    </AppLayout>
  );
}

export default App;
