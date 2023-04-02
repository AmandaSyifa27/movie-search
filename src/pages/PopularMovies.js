import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import Loading from "../components/Loading";
import NoMovies from "../components/NoMovie";
import { FloatButton } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { StarFilled, TrophyFilled, SearchOutlined } from "@ant-design/icons";

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
   if (res.data.items.length === 0) {
    setError(true);
   }
  };
  fetchData().catch((error) => {
   setError(true);
  });
 }, []);
 return (
  <div className="popular-container container">
   <div className="tag">
    <div />
    <h1>Mot Popular Movies</h1>
   </div>
   {error ? (
    <NoMovies />
   ) : (
    <div className="cards">
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
    </div>
   )}
   <FloatButton icon={<SearchOutlined />} onClick={() => navigate("/")} />
   <FloatButton.BackTop style={{ marginBottom: "60px" }} />{" "}
  </div>
 );
};

export default PopularMovies;
