import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("table/:sid/menu", "routes/tableMenu.tsx"),
  route("table/:sid/menu/:mid", "routes/menuDetail.tsx"),
  // route("table/:sid/cart", "routes/tableMenu.tsx"),
  // route("table/:sid/order", "routes/tableMenu.tsx"),
] satisfies RouteConfig;
