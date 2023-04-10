import React from "react";
import NoMovie from "../assets/NoData.svg";

const NoMovies = () => {
 return (
  <div className="err">
   <img src={NoMovie} alt="No Movie Found" />
   <em>No movies found, or it may be a server side error</em>
  </div>
 );
};

export default NoMovies;
