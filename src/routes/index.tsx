import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FC } from "react";
import { useForm } from "react-hook-form";
import ButtonGroup from "../components/ButtonGroup";
import Card from "../components/Card";
import FormInput from "../components/FormInput";
import Table from "../components/Table";
import AppLayout from "../layouts/AppLayout";
import UserService from "../services/user-service";
import "../styles/app.scss";
import { TUserSearchResultType, TUserSearchType } from "../types/user-type";

const App: FC<unknown> = () => {
  const { register, handleSubmit, getValues, reset } = useForm<TUserSearchType>(
    {
      values: {
        page: 1,
        size: 10,
        userId: "",
        name: "",
      },
    },
  );
  const {
    data = {} as TUserSearchResultType,
    isFetched,
    execute,
  } = UserService.useSearchUserList(getValues());
  const navigate = useNavigate();

  const handleSearch = handleSubmit(execute);
  const handleReset = () => reset();
  const handleCreate = () => navigate({ to: "/user/create" });

  return (
    <AppLayout breadcrumbList={["User", "Search"]}>
      <Card title="Search User">
        <form onSubmit={handleSearch}>
          <div className="columns">
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("userId"),
                }}
                label="User ID"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("name"),
                }}
                label="Name"
                type="text"
              />
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
                    onClick: handleSearch,
                  },
                  {
                    type: "button",
                    label: "Create",
                    color: "is-warning",
                    onClick: handleCreate,
                  },
                ]}
              />
            </div>
          </div>
        </form>
      </Card>
      {isFetched && (
        <>
          <br />
          <Card title="">
            <Table
              headerList={["No.", "User Id", "Name"]}
              rowCount={data?.resultList?.length ?? 0}>
              {data?.resultList?.map((result, idx) => (
                <tr key={result.id}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link to={`/user/${result.id}`}>{result.userId}</Link>
                  </td>
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

export const Route = createFileRoute("/")({
  component: App,
});
