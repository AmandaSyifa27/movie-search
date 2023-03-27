import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import { TrophyFilled } from "@ant-design/icons";
import Loading from "../components/Loading";
import { message } from "antd";
import NoMovies from "../components/NoMovie";
import { Link } from "react-router-dom";

const BoxOfficeMovies = () => {
 const [movies, setMovies] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);

 React.useEffect(() => {
  const fetchData = async () => {
   const res = await APIRequest.getBoxOfficeMovies();
   setMovies(res.data.items);
   setLoading(false);
  };
  fetchData().catch((error) => {
   setLoading(false);
   setError(true);
   console.log("gagal");
  });
 }, []);
 return (
  <div className=" box-container container">
   {/* {contextHolder} */}
   {error ? (
    <NoMovies />
   ) : (
    <section className="cards">
     {loading ? (
      <Loading />
     ) : (
      movies.map((movie) => {
       return (
        <div key={movie.id} className="movie-card">
         <div className="movie-img">
          <img src={movie.image} alt={movie.title} />
         </div>
         <div className="movie-content">
          <strong>{movie.title}</strong>
          <span>{movie.year}</span>
          <p className="movie-rank">
           <TrophyFilled style={{ color: "goldenrod" }} />
           {movie.rank}
          </p>
         </div>
         <div className="card-button">
          <Link to={`/movie-detail/${movie.id}`}>Go To Detail Movie</Link>
         </div>
        </div>
       );
      })
     )}
    </section>
   )}
  </div>
 );
};
export default BoxOfficeMovies;
