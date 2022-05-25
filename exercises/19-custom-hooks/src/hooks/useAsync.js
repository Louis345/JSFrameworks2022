import { useState, useEffect, useCallback } from "react";

/**
 * Reduces the repetition of AJAX and other async calls
 * @param {Function} asyncFunction a callback that makes a async request,
 * which returns a Promise, which returns data
 * @param {boolean} immediate whether or not the async request should be
 * made immediate when the component mounts.
 * @return {Object} { client, isLoading, hasError, data }
 * You can call on "client" to make the AJAX request.
 */
function useAsync(asyncFunction, immediate = true) {
  const [isLoading, setIsLoading] = useState(immediate);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState();

  /**
   * useCallback will only make the request if one of
   * dependencies (asyncFunction) changes
   */
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
    data,
  };
}

export { useAsync };
