import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Tooltip, message } from "antd";

const MoviePosters = () => {
 const [loading, setLoading] = useState(true);
 const [posters, setPosters] = useState([]);
 const params = useParams();
 const [messageApi, contextHolder] = message.useMessage();

 React.useEffect(() => {
  const fetchPosters = async (id) => {
   const res = await APIRequest.getMoviePosters(`${params.movieId}`);
   setPosters(res.data.posters);
   setLoading(false);
  };
  fetchPosters().catch((error) => {
   return messageApi.error("Failed to fetch movie posters, Sorry😓");
  });
 }, [params.movieId]);

 return (
  <div className="posters-container">
   {contextHolder}
   {loading ? (
    <Loading />
   ) : (
    posters.map((poster) => {
     return (
      <Tooltip title="preview">
       <a href={poster.link}>
        {loading ? <Loading /> : <img src={poster.link} alt={poster.link} />}
       </a>
      </Tooltip>
     );
    })
   )}
  </div>
 );
};

export default MoviePosters;
