import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import { StarFilled, TrophyFilled, SearchOutlined } from "@ant-design/icons";
import Loading from "../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { FloatButton } from "antd";
import NoMovies from "../components/NoMovie";

const PopularMovies = () => {
 const [movies, setMovies] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);
 const navigate = useNavigate();

 React.useEffect(() => {
  const fetchData = async () => {
   const res = await APIRequest.getPopularMovies();
   setMovies(res.data.items);
   setLoading(false);
  };
  fetchData().catch((error) => {
   setError(true);
  });
 }, []);
 return (
  <div className="popular-container container">
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
           Rank:
           <TrophyFilled style={{ color: "goldenrod" }} />
           {movie.rank}
          </p>
          <p className="movie-rating">
           Rating:
           <StarFilled style={{ color: "gold" }} />
           {movie.imDbRating}
          </p>
         </div>
         <div>
          <Link className="card-button" to={`/movie-detail/${movie.id}`}>
           Go To Detail Movie
          </Link>
         </div>
        </div>
       );
      })
     )}
    </section>
   )}
   <FloatButton icon={<SearchOutlined />} onClick={() => navigate("/")} />
   <FloatButton.BackTop style={{ marginBottom: "60px" }} />{" "}
  </div>
 );
};

export default PopularMovies;
