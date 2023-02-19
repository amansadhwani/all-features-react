import React, { useState, useEffect } from "react";
import axios from "axios";

export const useApi = (url: any) => {
  const [loading, setLoading] = React.useState<Boolean>(false);
  const [data, setData] = useState<[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading,error };
};
