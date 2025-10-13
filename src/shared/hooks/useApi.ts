// import type { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

// useApi = (fetcher: () => Promise<AxiosResponse<T>>)
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const useApi = <T>(fetcher: Function) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);

  const loadData = async () => {
    try {
      const response = await fetcher();
      setData(response);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { isLoading, isError, data };
};
