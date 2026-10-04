

import React, { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;