import type { Route } from "./+types/menuDetail";
import { Menu } from "~/menuDetail/menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "본때 테이블 주문" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MenuDetail() {
  return <Menu />;
}
