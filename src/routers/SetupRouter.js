import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pages from "./pages";
import PopularMovies from "../pages/PopularMovies";
import Top250Movies from "../pages/Top250Movies";
import BoxOfficeMovies from "../pages/BoxOfficeMovies";
import MovieDetail from "../pages/MovieDetail";

const SetupRouter = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Pages />}>
     <Route index element={<Home />} />
     <Route path="/most-popular" element={<PopularMovies />} />
     <Route path="/top-250" element={<Top250Movies />} />
     <Route path="/box-office" element={<BoxOfficeMovies />} />
     <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
    </Route>
   </Routes>
  </Router>
 );
};

export default SetupRouter;
