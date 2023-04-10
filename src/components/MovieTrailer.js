import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import ErrorTrailer from "../assets/NoTrailer.svg";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const MovieTrailer = () => {
 const [trailer, setTrailer] = useState();
 const [loading, setLoading] = useState(true);
 const params = useParams();
 const [error, setError] = useState(false);

 React.useEffect(() => {
  const fetchTrailer = async () => {
   const res = await APIRequest.getMovieTrailer(`${params.movieId}`);
   setTrailer(res.data);
   setLoading(false);
   console.log(res);
   if (res.data.linkEmbed === null) {
    setError(true);
   }
  };
  fetchTrailer().catch((error) => {
   setError(true);
  });
 }, [params.movieId]);

 return (
  <div
   className="trailer-container"
   style={{
    paddingBottom: trailer ? "56.25%" : "0",
   }}
  >
   {error ? (
    <div className="err">
     <img src={ErrorTrailer} alt="No Trailer Found" />
     <em>No trailer, or it may be a server side error</em>
    </div>
   ) : (
    <>
     {loading ? (
      <Loading />
     ) : (
      <div className="trailer">
       <div className="iframe-container">
        <iframe
         className="iframe"
         src={trailer.linkEmbed}
         allowFullScreen
         allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         title={trailer.title}
        />
       </div>
      </div>
     )}
    </>
   )}
  </div>
 );
};

export default MovieTrailer;
