import { FC, useState } from "react";
import "./styles/app.scss";
import PWABadge from "./PWABadge";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";
import FormInput from "./components/FormInput";
import ButtonGroup from "./components/ButtonGroup";
import Table from "./components/Table";
import { useQuery } from "@tanstack/react-query";
import UserService from "./utils/services/UserService"

type SearchFormType = {
  page: number;
  size: number;
  userId: string;
}

const App: FC<unknown> = () => {
  const [searchForm, setSearchForm] = useState<SearchFormType>({ page: 1, size: 10, userId: "" })
  const [search, setSearch] = useState<SearchFormType>({ ...searchForm })
  const { data } = useQuery({ queryKey: ["UserService.searchUserList", search.page, search.size, search.userId], queryFn: () => UserService.searchUserList(search.page, search.size, search.userId) })

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
              <div className="columns">
                <div className="column is-4">
                  <FormInput label="User ID" type="text" onChange={(e) =>
                    setSearchForm(prev => ({ ...prev, userId: (e.target as HTMLInputElement).value }))
                  } />
                </div>
                <div className="column is-4">
                  <FormInput label="Name" type="text" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <ButtonGroup buttonList={[
                    { label: "Reset" },
                    { label: "Search", type: "success", onClick: () => setSearch({ ...searchForm }) }
                  ]} />
                </div>
              </div>
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
  )
};

export default App;
