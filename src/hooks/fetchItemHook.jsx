import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchItem = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(url);
        setData(res.data.data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [url]);

  return { data, error };
};
