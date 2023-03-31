import { FloatButton, Input } from "antd";
import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import Loading from "../components/Loading";
import { TbTrophyFilled } from "react-icons/tb";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import NoMovies from "../components/NoMovie";

const Home = () => {
 //  const { Search } = Input;
 const [movies, setMovies] = useState();
 const [loading, setLoading] = useState(true);
 const [cari, setCari] = useState(false);

 const handleSearch = async (value) => {
  //   if (e.target.value.length > 3) {
  console.log("value", value);
  const result = await APIRequest.getSearchCar(value);
  //   if (result.data.results.length > 0) {
  setMovies(result.data.results);
  setLoading(false);
  console.log(result.data.results);
  setCari(true);
  //   } else {
  //    return <NoMovies />;
  //   }
  //   } else return null;
 };

 return (
  <div className="home container">
   <div>
    <Input.Search
     className="search-input"
     placeholder="input search text"
     allowClear
     onSearch={handleSearch}
    />
    {/* <input ={handleSearch} /> */}
   </div>
   {cari ? (
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
          <p>{movie.description}</p>
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
   <FloatButton.BackTop />
  </div>
 );
};
export default Home;
