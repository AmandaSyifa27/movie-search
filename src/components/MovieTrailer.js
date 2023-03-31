import React, { useState } from "react";
import { useParams } from "react-router-dom";
import APIRequest from "../apis/APIRequest";
import Loading from "./Loading";
import { BsCameraVideoOffFill } from "react-icons/bs";

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
  };
  fetchTrailer().catch((error) => {
   setError(true);
  });
 }, [params.movieId]);

 return (
  <div className="trailer-container">
   {error ? (
    <div className="err">
     <BsCameraVideoOffFill className="err-svg" />
     <em>No trailer, or it may be a server side error</em>
    </div>
   ) : (
    <>
     {loading ? (
      <Loading />
     ) : (
      <div className="trailer">
       <iframe
        className="iframe"
        src={trailer.linkEmbed}
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={trailer.title}
       />
      </div>
     )}
     {/* {trailer ? (
      <div className="trailer">
       <iframe
        className="iframe"
        src={trailer.linkEmbed}
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={trailer.title}
       />
      </div>
     ) : (
      <Loading />
     )} */}
    </>
   )}
  </div>
 );
};

export default MovieTrailer;
