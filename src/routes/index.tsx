import { createFileRoute } from "@tanstack/react-router";
import { FC } from "react";
import "../styles/app.scss";
import Card from "../components/Card";
import FormInput from "../components/FormInput";
import ButtonGroup from "../components/ButtonGroup";
import Table from "../components/Table";
import UserService from "../utils/services/UserService";
import { UserSearchType } from "../utils/types/UserType";
import AppLayout from "../layouts/AppLayout";
import { useForm } from "react-hook-form";

const App: FC<unknown> = () => {
  const { register, handleSubmit, getValues } = useForm<UserSearchType>({
    defaultValues: {
      page: 1,
      size: 10,
      userId: "",
      name: ""
    }
  })
  const { setSearch, data } = UserService.useSearchUserList(getValues());

  return (
    <AppLayout breadcrumbList={["User", "Search"]}>
      <Card title="Search User">
        <form onSubmit={handleSubmit(setSearch)}>
          <div className="columns">
            <div className="column is-4">
              <FormInput
                register={register("userId")}
                label="User ID"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput register={register("name")} label="Name" type="text" />
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
                    onClick: handleSubmit(setSearch)
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

export const Route = createFileRoute("/")({
  component: App,
});
