import { FC } from "react";
import { createFileRoute } from "@tanstack/react-router";

const UserCreatePage: FC<unknown> = () => <div>UserCreatePage</div>;

export const Route = createFileRoute("/user/create")({
  component: UserCreatePage,
});
