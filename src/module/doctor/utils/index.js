import { useEffect, useState } from "react";
import { getalldoctor } from "../api";

export const useGetAllDoctor = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getalldoctor({ status: 1, ...params });
    if (response?.success) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
