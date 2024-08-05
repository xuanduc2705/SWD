import { postData, getData } from "@/lib/request";

export const saveBooking = (params) =>
  postData("/authen/childcare/save-booking", params);
