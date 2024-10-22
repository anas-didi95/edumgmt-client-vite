import { FC } from "react";
import { createFileRoute } from "@tanstack/react-router";
import UserService from "../../utils/services/UserService";

const UserFormPage: FC<unknown> = () => {
  const { userId } = Route.useParams();
  const { data } = UserService.useGetUser(userId);

  return <div>User Form Page: {JSON.stringify(data)}</div>;
};

export const Route = createFileRoute("/user/$userId")({
  component: UserFormPage,
});
