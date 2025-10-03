import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data ");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPanding(false);
        setError(null);
      })
      .catch((error) => {
        if(error.name==='AbortError'){
          return;
        }
        setError(error.message);
        setIsPanding(false);
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isPanding, error };
};
export default useFetch;
