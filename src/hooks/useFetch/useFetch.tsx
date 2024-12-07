import { useCallback, useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";

import { api } from "../../api";
import { IServerResponse } from "../../types/serverResponse/types";
import { IUseFetchOptions } from "./types";

import { useDispatch } from "react-redux";
import { session } from "../../store/sessionSlice";

function useFetch<T = any>(path?: string, options: IUseFetchOptions<T> = {}) {
  const dispatch = useDispatch();

  const { initialValue } = options;
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>(initialValue || ({} as T));

  const refresh = useCallback(
    (config?: AxiosRequestConfig<any>) => {
      const headers = config?.headers ?? {};
      setLoading(true);

      if (path) {
        api
          .get<IServerResponse<T>>(path, { ...config, headers })
          .then(({ data }) => setData(data.data ?? (data as T)))
          .catch((e) => {
            dispatch(
              session({
                valid: false,
                code: e.response.status,
                message: `Error ID: ${e.response.data.code ?? e.response.data.error}`
              })
            );
          })
          .finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    },
    [path]
  );

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { data, loading, refresh };
}

export { useFetch };
