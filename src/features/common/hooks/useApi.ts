import { AxiosPromise, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

export const useApi = (service: AxiosPromise<unknown>) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setloading] = useState<boolean>(true);

  const fetchData = () => {
    service
      .then((res: AxiosResponse<unknown>) => {
        setResponse(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [response, error, loading];
};
