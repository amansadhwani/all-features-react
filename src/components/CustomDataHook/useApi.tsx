import React, { useState, useEffect } from "react";
import axios from "axios";

export const useApi = (url: any) => {
  const [loading, setLoading] = React.useState<Boolean>(false);
  const [data, setData] = useState<[] | null>(null);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then(function (response) {
      setData(response.data.results);
    });
    setLoading(false);
  }, [url]);
  return { data, loading };
};
