import React from "react";
import { TbMovieOff } from "react-icons/tb";

const NoMovies = () => {
 return (
  <div className="err home-err">
   <TbMovieOff className="err-svg" />
   <em>No movies found, or it may be a server side error</em>
  </div>
 );
};

export default NoMovies;
