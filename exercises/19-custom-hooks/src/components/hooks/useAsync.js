import { useState, useEffect, useCallback } from "react";

function useAsync(asyncFunction, immediate = true) {
  const [isLoading, setIsLoading] = useState(immediate);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState();


  const client = useCallback(() => {
    setIsLoading(true);
    setHasError(false);

    asyncFunction()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      client();
    }
  }, [client, immediate]);

  return {
    client,
    isLoading,
    hasError,
    data
  };
}

export { useAsync };
