import { postData, getData } from "@/lib/request";

export const getAllBooking = (params) =>
  getData("/authen/childcare/get-all-booking", params);
export const switchStatus = (params) =>
  postData("/authen/childcare/switch-booking-status", params);
