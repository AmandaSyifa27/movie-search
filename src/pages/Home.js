import { FloatButton, Input } from "antd";
import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import Loading from "../components/Loading";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import NoMovies from "../components/NoMovie";

const Home = () => {
 const [movies, setMovies] = useState();
 const [loading, setLoading] = useState(false);
 const [search, setSearch] = useState(false);
 const [error, setError] = useState(false);

 const handleSearch = async (value) => {
  if (value.length === 0) {
   return;
  }

  setLoading(true);

  const result = await APIRequest.getSearchCar(value);
  if (result.data.results.length > 0) {
   setMovies(result.data.results);
   setSearch(true);
   setLoading(false);
   setError(false);
  } else {
   setSearch(false);
   setError(true);
   setLoading(false);
  }
 };

 return (
  <div className="home container">
   <div>
    <Input.Search
     className="search-input"
     placeholder="Search..."
     allowClear
     onSearch={handleSearch}
    />
   </div>
   {error ? (
    <NoMovies />
   ) : (
    <>
     {search ? (
      <div className="cards">
       {loading ? (
        <Loading />
       ) : (
        <div className="cards">
         {movies.map((movie) => {
          return (
           <div key={movie.id} className="movie-card">
            <div className="movie-img">
             <img src={movie.image} alt={movie.title} />
            </div>
            <div className="movie-content">
             <strong>{movie.title}</strong>
             <p>{movie.description}</p>
            </div>
            <div>
             <Link className="card-button" to={`/movie-detail/${movie.id}`}>
              Go To Detail Movie
             </Link>
            </div>
           </div>
          );
         })}
        </div>
       )}
      </div>
     ) : (
      <div
       style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "150px",
        fontWeight: "500",
       }}
      >
       <FcSearch
        style={{
         fontSize: "100px",
        }}
       />
       <p>Search movies</p>
      </div>
     )}
    </>
   )}
   <FloatButton.BackTop />
  </div>
 );
};
export default Home;
