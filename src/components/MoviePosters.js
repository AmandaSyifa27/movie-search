import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import ErrorPosters from "../assets/NoPosters.svg";
import { IoIosArrowDropdown } from "react-icons/io";
import Loading from "./Loading";
import { Tooltip } from "antd";
import { useParams } from "react-router-dom";

const MoviePosters = () => {
 const [posters, setPosters] = useState([]);
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(true);
 const [visibleItems, setVisibleItems] = useState(5);
 const params = useParams();

 React.useEffect(() => {
  const fetchPosters = async (id) => {
   const res = await APIRequest.getMoviePosters(`${params.movieId}`);
   setPosters(res.data.posters);
   setLoading(false);
   if (res.data.posters.length === 0) {
    setError(true);
   }
  };
  fetchPosters().catch((error) => {
   setError(true);
  });
 }, [params.movieId]);

 const handleLoadMore = () => {
  setVisibleItems(visibleItems + 5);
 };

 return (
  <div className="posters-container">
   {error ? (
    <div className="err">
     <img className="poster-err" src={ErrorPosters} alt="Poster Not Found" />
     <em>No posters, or it may be a server side error</em>
    </div>
   ) : (
    <>
     {loading ? (
      <Loading />
     ) : (
      <>
       <div className="posters">
        {posters.slice(0, visibleItems).map((poster) => {
         return (
          <Tooltip title="preview" key={poster.id}>
           <a href={poster.link}>
            <img className="poster-img" src={poster.link} alt={poster.link} />
           </a>
          </Tooltip>
         );
        })}
       </div>
       <div className="load-more">
        {visibleItems < posters.length && (
         <>
          <button onClick={handleLoadMore}>
           <IoIosArrowDropdown />
          </button>
          <p>Show more</p>
         </>
        )}
       </div>
      </>
     )}
    </>
   )}
  </div>
 );
};

export default MoviePosters;
