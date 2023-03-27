import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Tooltip } from "antd";
import { MdOutlineNaturePeople } from "react-icons/md";

const FullCasts = () => {
 const params = useParams();
 const [casts, setCasts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);

 React.useEffect(() => {
  const fetchCasts = async (id) => {
   const res = await APIRequest.getMovieFullCast(`${params.movieId}`);
   setCasts(res.data.actors);
   setLoading(false);
  };
  fetchCasts().catch((error) => {
   setError(true);
  });
 }, [params.movieId]);
 return (
  <div className="fullcasts-container">
   {error ? (
    <div>
     <MdOutlineNaturePeople />
     <em>No Casts Found</em>
    </div>
   ) : (
    <>
     {loading ? (
      <Loading />
     ) : (
      casts.map((cast) => {
       return (
        <div className="card" key={cast.id}>
         <Tooltip
          // color="#607cb6"
          title="web search"
         >
          <a href={"https://www.google.com/search?q=" + cast.name}>
           {" "}
           <img src={cast.image} alt={cast.name} />
          </a>
         </Tooltip>
         <b>{cast.name}</b>
        </div>
       );
      })
     )}
    </>
   )}
  </div>
 );
};

export default FullCasts;
