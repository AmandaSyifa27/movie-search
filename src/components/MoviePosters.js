import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import { IoIosImages } from "react-icons/io";
import Loading from "./Loading";
import { Tooltip } from "antd";
import { useParams } from "react-router-dom";

const MoviePosters = () => {
 const [posters, setPosters] = useState([]);
 const [error, setError] = useState(false);
 const params = useParams();

 React.useEffect(() => {
  const fetchPosters = async (id) => {
   const res = await APIRequest.getMoviePosters(`${params.movieId}`);
   setPosters(res.data.posters);
  };
  fetchPosters().catch((error) => {
   setError(true);
  });
 }, [params.movieId]);

 return (
  <div className="posters-container">
   {error ? (
    <div className="err">
     <IoIosImages className="err-svg" />
     <em>No posters, or it may be a server side error</em>
    </div>
   ) : (
    <>
     {posters ? (
      posters.map((poster) => {
       return (
        <Tooltip title="preview">
         <a href={poster.link}>
          <img src={poster.link} alt={poster.link} />
         </a>
        </Tooltip>
       );
      })
     ) : (
      <Loading />
     )}
    </>
   )}
  </div>
 );
};

export default MoviePosters;
