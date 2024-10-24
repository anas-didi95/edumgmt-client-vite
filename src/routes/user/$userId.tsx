import { FC } from "react";
import { createFileRoute } from "@tanstack/react-router";
import UserService from "../../utils/services/UserService";
import AppLayout from "../../layouts/AppLayout";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import { UserFormType } from "../../utils/types/UserType";
import { useForm } from "react-hook-form";

const UserFormPage: FC<unknown> = () => {
  const { userId } = Route.useParams();
  const { data = {} as UserFormType } = UserService.useGetUser(userId);
  const { register } = useForm<UserFormType>({
    values: data,
    disabled: true,
  });

  return (
    <AppLayout breadcrumbList={["User", data.userId ?? "...", "View"]}>
      <Card title="View User">
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
                register={register("updatedBy")}
                label="Updated By"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                register={register("updatedDate")}
                label="Updated Date"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                register={register("isDeleted")}
                label="Is Deleted?"
                type="text"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <FormInput
                register={register("createdBy")}
                label="Created By"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                register={register("createdDate")}
                label="Created Date"
                type="text"
              />
            </div>
            <div className="column is-4">
              <FormInput
                register={register("version")}
                label="Version"
                type="text"
              />
            </div>
          </div>
        </form>
      </Card>
    </AppLayout>
  );
};

export const Route = createFileRoute("/user/$userId")({
  component: UserFormPage,
});
