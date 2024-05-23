import { LoginApi } from "@/module/login/api";
import ErrorPath from "@/module/error/error";
import { Home } from "@/module/home";
export const routes = [
  { path: "/", component: Home, layout: true },
  { path: "/home", component: Home, layout: true },
  { path: "/login", component: LoginApi, public: true },
];
export const errorPage = { path: "*", component: ErrorPath };
export const accessDeniedPage = { path: "*", component: ErrorPath };
