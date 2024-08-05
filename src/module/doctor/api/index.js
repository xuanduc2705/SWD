import { postData, getData } from "@/lib/request";

export const getalldoctor = (params) =>
  getData("/authen/childcare/get-all-doctor", params);
