import React from "react";
import BoxOfficeMovies from "../pages/BoxOfficeMovies";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import Pages from "./pages";
import PopularMovies from "../pages/PopularMovies";
import Top250Movies from "../pages/Top250Movies";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

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
     <Route path="*" element={<NotFoundPage />} />
    </Route>
   </Routes>
  </Router>
 );
};

export default SetupRouter;
