import { postData, getData } from "@/lib/request";

export const UserProfile = (params) =>
  getData("/authen/authen/get-user-profile", params);
