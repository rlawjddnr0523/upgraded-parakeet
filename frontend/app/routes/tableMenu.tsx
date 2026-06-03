import type { Route } from "./+types/tableMenu";
import { Welcome } from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "본때 테이블 주문" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function TableMenu() {
  return (
    <>
      <Welcome />
    </>
  );
}
