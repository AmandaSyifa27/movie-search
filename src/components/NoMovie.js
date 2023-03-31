import React from "react";
import { TbMovieOff } from "react-icons/tb";

const NoMovies = () => {
 return (
  <div className="err">
   <TbMovieOff className="err-svg" />
   <em>No movies found</em>
  </div>
 );
};

export default NoMovies;
