import { useEffect, useState } from "react";
import { UserProfile } from "../api";

export const useGetUserProfile = (params) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await UserProfile({ status: 1, ...params });
    if (response?.success) setData(response?.data);
  }
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);
  return data;
};
