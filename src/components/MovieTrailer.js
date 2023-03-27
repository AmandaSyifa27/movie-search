import React, { useState } from "react";
import { useParams } from "react-router-dom";
import APIRequest from "../apis/APIRequest";
import Loading from "./Loading";
import { message } from "antd";

const MovieTrailer = () => {
 const [trailer, setTrailer] = useState();
 const params = useParams();
 const [messageApi, contextHolder] = message.useMessage();

 React.useEffect(() => {
  const fetchTrailer = async () => {
   const res = await APIRequest.getMovieTrailer(`${params.movieId}`);
   setTrailer(res.data);
   console.log(res);
  };
  fetchTrailer().catch((error) => {
   return messageApi.error("Failed to fetch video, Sorry😓");
  });
 }, [params.movieId]);

 return (
  <div className="trailer-container">
   {contextHolder}
   {trailer ? (
    <div>
     <iframe
      width="1000px"
      height="500px"
      src={trailer.linkEmbed}
      allowFullScreen
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title={trailer.title}
     />
    </div>
   ) : (
    <Loading />
   )}
  </div>
 );
};

export default MovieTrailer;
