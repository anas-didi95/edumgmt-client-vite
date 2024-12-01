import { createFileRoute } from "@tanstack/react-router";
import { FC } from "react";
import { useForm } from "react-hook-form";
import ButtonGroup from "../../components/ButtonGroup";
import Card from "../../components/Card";
import FormCheckbox from "../../components/FormCheckbox";
import FormInput from "../../components/FormInput";
import AppLayout from "../../layouts/AppLayout";
import { Message } from "../../utils/constant";
import { UserFormType } from "../../utils/types/UserType";

const UserCreatePage: FC<unknown> = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<UserFormType>();

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
                state={{
                  register: register("userId", {
                    required: Message.fieldIsRequired(),
                  }),
                  error: errors.userId,
                  isMandatory: true,
                }}
                label="User ID"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("name", {
                    required: Message.fieldIsRequired(),
                  }),
                  error: errors.name,
                  isMandatory: true,
                }}
                label="Name"
                type="text"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("password", {
                    required: Message.fieldIsRequired(),
                  }),
                  error: errors.password,
                  isMandatory: true,
                }}
                label="Password"
                type="password"
              />
            </div>
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("confirmPassword", {
                    required: Message.fieldIsRequired(),
                    validate: (val) =>
                      val === getValues("password") ||
                      Message.passwordNotMatched(),
                  }),
                  error: errors.confirmPassword,
                  isMandatory: true,
                }}
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
