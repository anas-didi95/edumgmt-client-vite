import { FC } from "react";
import { createFileRoute } from "@tanstack/react-router";
import UserService from "../../utils/services/UserService";
import AppLayout from "../../layouts/AppLayout";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import { UserFormType } from "../../utils/types/UserType";
import { useForm } from "react-hook-form";
import FormCheckbox from "../../components/FormCheckbox";
import { Message } from "../../utils/constant";

const UserFormPage: FC<unknown> = () => {
  const { userId } = Route.useParams();
  const { data = {} as UserFormType } = UserService.useGetUser(userId);
  const {
    register,
    formState: { errors },
  } = useForm<UserFormType>({
    values: {
      ...data,
      createdDate: new Date(data.createdDate).toLocaleString(),
      updatedDate: new Date(data.updatedDate).toLocaleString(),
    },
    disabled: true,
  });

  return (
    <AppLayout breadcrumbList={["User", data.userId ?? "...", "View"]}>
      <Card title="View User">
        <form>
          <div className="columns">
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("password", {
                    required: Message.fieldIsRequired(),
                  }),
                  error: errors.password,
                }}
                label="User ID"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                state={{ register: register("name"), error: errors.name }}
                label="Name"
                type="text"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("updatedBy", {
                    required: Message.fieldIsRequired(),
                  }),
                  error: errors.updatedBy,
                }}
                label="Updated By"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("updatedDate", {
                    required: Message.fieldIsRequired(),
                  }),
                  error: errors.updatedDate,
                }}
                label="Updated Date"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormCheckbox
                register={register("isDeleted")}
                label="Is Deleted?"
                value="true"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("createdBy"),
                  error: errors.createdBy,
                }}
                label="Created By"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                state={{
                  register: register("createdDate"),
                  error: errors.createdDate,
                }}
                label="Created Date"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                state={{ register: register("version"), error: errors.version }}
                label="Version"
                type="text"
              />
            </div>
          </div>
        </form>
      </Card>
      <br />
      <Card title="Roles">
        {data.roles ? (
          <div className="buttons">
            {data.roles.map((role, idx) => (
              <span key={`${role}${idx}`} className="tag is-link is-medium">
                {role}
              </span>
            ))}
          </div>
        ) : (
          <p className="content has-text-weight-bold">No roles assigned</p>
        )}
      </Card>
    </AppLayout>
  );
};

export const Route = createFileRoute("/user/$userId")({
  component: UserFormPage,
});
