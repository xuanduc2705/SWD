import { postData } from "@/lib/request";

export const LoginApi = (username, password) =>
  postData("/authen/authen/sign-in", { username, password });
