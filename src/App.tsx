import { FC } from "react";
import "./styles/app.scss";
import Card from "./components/Card";
import FormInput from "./components/FormInput";
import ButtonGroup from "./components/ButtonGroup";
import Table from "./components/Table";
import UserService from "./utils/services/UserService";
import { UserSearchType } from "./utils/types/UserType";
import AppLayout from "./layouts/AppLayout";
import { useForm } from "react-hook-form";

const App: FC<unknown> = () => {
  const { register, formState: { errors }, reset, handleSubmit, getValues } = useForm<UserSearchType>({
    values: {
      page: 1,
      size: 10,
      userId: "",
      name: "",
    }
  })
  const { data, execute } = UserService.useSearchUserList({ ...getValues() });

  const handleSearch = handleSubmit(execute)
  const handleReset = () => reset()

  return (
    <AppLayout breadcrumbList={["User", "Search"]}>
      <Card title="Search User">
        <form>
          <div className="columns">
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("userId"),
                  error: errors.userId
                }}
                label="User ID"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput state={{ register: register("name"), error: errors.userId }} label="Name" type="text" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <ButtonGroup
                buttonList={[
                  { type: "reset", label: "Reset", onClick: handleReset },
                  {
                    type: "submit",
                    label: "Search",
                    color: "is-success",
                    onClick: handleSearch
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
            <Table headerList={["No.", "User Id", "Name"]} rowCount={data.resultList.length}>
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
};

export default App;
