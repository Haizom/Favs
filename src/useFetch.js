import { useState, useEffect } from "react";

export default function useFetch(url) {

    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

      const abortCont = new AbortController();

      fetch(url, {signal: abortCont.signal})

        .then(res => {
          if (!res.ok){
            throw Error("Something went wrong");
          }
          return res.json()})

        .then(data => {
          setBlogs(data);
          setLoading(false)})

        .catch(err => {
          if(err.name === "AbortError"){
            console.log("stop fetching1")
          } else {
            setLoading(false)
            setError(err.message)}
          }
        )
          return () => abortCont.abort();
    },[url]) // the [] for fetching only on the first render


    return {blogs, loading, error}
}
