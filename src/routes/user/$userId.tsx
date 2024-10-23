import { FC, useEffect, useMemo } from "react";
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
  const { register, reset } = useForm<UserFormType>({
    defaultValues: useMemo(() => {
      return data;
    }, [data]),
  });

  useEffect(() => {
    reset(data);
  }, [data, reset]);

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
        </form>
      </Card>
    </AppLayout>
  );
};

export const Route = createFileRoute("/user/$userId")({
  component: UserFormPage,
});
