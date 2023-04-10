import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import ErrorCast from "../assets/NoCasts.svg";
import Loading from "./Loading";
import { Tooltip } from "antd";
import { useParams } from "react-router-dom";

const FullCasts = () => {
 const params = useParams();
 const [casts, setCasts] = useState();
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(true);

 React.useEffect(() => {
  const fetchCasts = async (id) => {
   const res = await APIRequest.getMovieFullCast(`${params.movieId}`);
   setCasts(res.data.actors);
   setLoading(false);
   if (res.data.actors.length === 0) {
    setError(true);
   }
  };
  fetchCasts().catch((error) => {
   setError(true);
  });
 }, [params.movieId]);

 return (
  <div className="fullcasts-container">
   {error ? (
    <div
     className="err"
     style={{
      width: "-webkit-fill-available",
     }}
    >
     <img src={ErrorCast} alt="Cast Not Found" />
     <em>No casts found, or it may be a server side error</em>
    </div>
   ) : (
    <>
     {loading ? (
      <Loading />
     ) : (
      <>
       {casts.map((cast) => {
        return (
         <div className="card" key={cast.id}>
          <Tooltip title="web search">
           <a href={"https://www.google.com/search?q=" + cast.name}>
            {" "}
            <img src={cast.image} alt={cast.name} />
           </a>
          </Tooltip>
          <b>{cast.name}</b>
          <em>- {cast.asCharacter} -</em>
         </div>
        );
       })}
      </>
     )}
    </>
   )}
  </div>
 );
};

export default FullCasts;
