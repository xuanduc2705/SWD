import { useEffect, useState } from "react";
import { getListDoctor } from "../api";

export const useGetListDoctor = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await getListDoctor({ status: 1, ...params });
    if (response?.success) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
