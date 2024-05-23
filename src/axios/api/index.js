import { getData } from "@/lib/request";

export const getInfo = (params) => getData("/authen/authen/sign-in", params);
