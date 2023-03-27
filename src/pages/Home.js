import React from "react";
import Contoh from "../assets/contoh.jpg";
import { Link, useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
 const location = useLocation();
 //  const { movies, payload } = location.state;

 return (
  <div className="home container">
   <section>
    <div>
     <img src={Contoh} alt="contoh" />
    </div>
    <div>
     <MovieCard />
    </div>
   </section>
  </div>
 );
};
export default Home;
