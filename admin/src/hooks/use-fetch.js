import { useState, useEffect } from "react";

export default function useFetch({ url, method, body, setState }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async () => {
    try {
      setIsLoading(true);

      let options = null;
      if (method && body) {
        options = {
          method: method.toLowerCase(),
          headers: { "content-type": "application/json" },
          body: JSON.stringify(body),
        };
      }

      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      setResponse(data);
      setError(null);
      if (setState) {
        setState(data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!url) return;
    makeRequest();
  }, [url, method, body]);

  return [response, isLoading, error];
}
