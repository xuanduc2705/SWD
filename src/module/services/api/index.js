import { getData, postData } from "@/lib/request";

export const getListDoctor = (params) =>
  getData("/authen/childcare/get-all-doctor", params);
