import { FC } from "react";
import "./styles/app.scss";
import PWABadge from "./PWABadge";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";
import FormInput from "./components/FormInput";
import ButtonGroup from "./components/ButtonGroup";
import Table from "./components/Table";
import { useQuery } from "@tanstack/react-query";

async function findUser(): Promise<{
  resultList?: { id: string; userId: string; name: string; roles: string[] }[];
  pagination?: {
    page: number,
    totalPages: number,
    recordsPerPage: number,
    totalRecords: number
  }
}> {
  try {
    const res = await fetch("http://localhost/edumgmt/user?page=1&size=10", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlZHVtZ210LWUwZWU2NGY5ODciLCJzdWIiOiJzdXBlci1hZG1pbiIsIm5iZiI6MTcyNzI3Mzg0NywiZXhwIjoxNzI3Mjc3NDQ3LCJpYXQiOjE3MjcyNzM4NDcsInJvbGVzIjpbIlJPTEVfU1VQRVJBRE1JTiJdfQ.gF84JxpRbbJzNxiN6pxMhLrXPMaAX3zyfwJ9wGlvvyc",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    const resBody = await res.json()
    return resBody
  } catch (error) {
    console.error("Fail to find user!", error)
    throw error;
  }
}

const App: FC<unknown> = () => {
  const { data } = useQuery({ queryKey: ["edumgmt", "user"], queryFn: findUser })

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
