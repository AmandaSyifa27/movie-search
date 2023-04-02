import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import { IoIosImages } from "react-icons/io";
import Loading from "./Loading";
import { Tooltip } from "antd";
import { useParams } from "react-router-dom";

const MoviePosters = () => {
 const [posters, setPosters] = useState([]);
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(true);
 const params = useParams();

 React.useEffect(() => {
  const fetchPosters = async (id) => {
   const res = await APIRequest.getMoviePosters(`${params.movieId}`);
   setPosters(res.data.posters);
   setLoading(false);
   console.log(res);
   if (res.data.posters.length === 0) {
    setError(true);
   }
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
     {loading ? (
      <Loading />
     ) : (
      <>
       {posters.map((poster) => {
        return (
         <Tooltip title="preview" key={poster.id}>
          <a href={poster.link}>
           <img src={poster.link} alt={poster.link} />
          </a>
         </Tooltip>
        );
       })}
      </>
     )}
    </>
   )}
  </div>
 );
};

export default MoviePosters;
