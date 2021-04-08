import { useState, useEffect, useCallback } from "react";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //look up useCallback hook
  const fetchUrl = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  });
  useEffect(() => {
    //passing in data and loading
    fetchUrl(data, loading);
  }, [fetchUrl, data, loading]);
  return [data, loading];
}
export { useFetch };
