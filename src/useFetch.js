import { useEffect, useState } from "react";
const API_ENDPoint = "https://www.omdbapi.com/?&apikey=88a17916";
const useFetch = (urlparams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchMovie(`${API_ENDPoint}${urlparams}`);
  }, [urlparams]); //when ever url parmas change useeffect will run
  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Response === "True") {
      setData(data.Search || data);
      setError({ show: false, msg: "" });
    } else {
      setError({ show: true, data: data.error });
    }
    setLoading(false);
  };
  return { loading, error, data };
};
export default useFetch;
