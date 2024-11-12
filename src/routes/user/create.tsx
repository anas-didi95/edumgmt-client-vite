import { FC } from "react";
import { createFileRoute } from "@tanstack/react-router";
import AppLayout from "../../layouts/AppLayout";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import { UserFormType } from "../../utils/types/UserType";
import ButtonGroup from "../../components/ButtonGroup";
import FormCheckbox from "../../components/FormCheckbox";

const UserCreatePage: FC<unknown> = () => {
  const { register, handleSubmit } = useForm<UserFormType>();

  const handleCreate = handleSubmit((data) => {
    console.log("[handleCreate] data", data);
  });

  return (
    <AppLayout breadcrumbList={["User", "Create"]}>
      <Card title="Create User">
        <form>
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
            <div className="column is-4">
              <FormInput
                register={register("password")}
                label="Password"
                type="password"
              />
            </div>
            <div className="column is-4">
              <FormInput
                register={register("confirmPassword")}
                label="Confirm Password"
                type="password"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-12">
              <div className="field box">
                <label className="label">Roles</label>
                <div className="control checkboxes">
                  <FormCheckbox
                    register={register("roles")}
                    remark="Teacher"
                    value="ROLE_TEACHER"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <ButtonGroup
                buttonList={[
                  {
                    type: "submit",
                    label: "Create",
                    color: "is-success",
                    onClick: handleCreate,
                  },
                ]}
              />
            </div>
          </div>
        </form>
      </Card>
    </AppLayout>
  );
};

export const Route = createFileRoute("/user/create")({
  component: UserCreatePage,
});
