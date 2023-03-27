import React from "react";
import { TbMovieOff } from "react-icons/tb";

const NoMovies = () => {
 return (
  <div className="no-movies">
   <TbMovieOff />
   <em>No Movies Found</em>
  </div>
 );
};

export default NoMovies;
