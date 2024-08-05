import { useEffect, useState } from "react";
import { getAllBooking } from "../api";

export const useGetAllBooking = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getAllBooking({ status: 1, ...params });
    if (response?.success) setData(response?.data);
    console.log(response);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
