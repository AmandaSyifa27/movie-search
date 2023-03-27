import React from "react";
import FullCasts from "../components/FullCasts";
import MoviePosters from "../components/MoviePosters";
import MovieTrailer from "../components/MovieTrailer";
import MovieAwards from "../components/MovieAwards";
import { Anchor, Col, Divider, Row } from "antd";
// import { useLocation, useParams } from "react-router-dom";

const MovieDetail = () => {
 return (
  <div className="detail-container container">
   <div
    style={{
     margin: "-30px",
     boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
    }}
   >
    <Anchor
     style={{
      backgroundColor: "white",
      padding: "10px",
     }}
     direction="horizontal"
     items={[
      {
       key: "full-casts",
       href: "#full-casts",
       title: "Full Casts",
      },
      {
       key: "movie-trailer",
       href: "#trailer",
       title: "Trailer",
      },
      {
       key: "movie-posters",
       href: "#posters",
       title: "Posters",
      },
      {
       key: "movie-awards",
       href: "#awards",
       title: "Awards",
      },
     ]}
    />
   </div>
   <div className="detail-content">
    <Divider id="full-casts" orientation="left">
     Casts
    </Divider>

    <FullCasts />
    <Divider id="trailer" orientation="left">
     Trailer
    </Divider>
    <MovieTrailer />
    <Divider id="posters" orientation="left">
     Posters
    </Divider>
    {/* <MoviePosters /> */}
    <Divider id="awards" orientation="left">
     Awards
    </Divider>
    <MovieAwards />
   </div>
  </div>
 );
};

export default MovieDetail;
