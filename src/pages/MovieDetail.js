import React, { useState } from "react";
import { Anchor, Divider, FloatButton } from "antd";
import FullCasts from "../components/FullCasts";
import MoviePosters from "../components/MoviePosters";
import MovieTrailer from "../components/MovieTrailer";
import MovieAwards from "../components/MovieAwards";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import APIRequest from "../apis/APIRequest";

const MovieDetail = () => {
 const navigate = useNavigate();
 const params = useParams();
 const [title, setTitle] = useState();

 React.useEffect(() => {
  const fetchTitle = async () => {
   const res = await APIRequest.getMovieTrailer(`${params.movieId}`);
   setTitle(res.data.title);
   console.log(res);
  };
  fetchTitle();
 }, [params.movieId]);

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
      fontWeight: "600",
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
   <div className="detail-title">
    <p>{title}</p>
   </div>
   <div className="detail-content">
    <div id="full-casts">
     <Divider orientation="left">Casts</Divider>
     <FullCasts />
    </div>
    <div id="trailer">
     <Divider orientation="left">Trailer</Divider>
     <MovieTrailer />
    </div>
    <div id="posters">
     <Divider orientation="left">Posters</Divider>
     <MoviePosters />
    </div>
    <div id="awards">
     <Divider orientation="left">Awards</Divider>
     <MovieAwards />
    </div>
   </div>
   <FloatButton icon={<SearchOutlined />} onClick={() => navigate("/")} />
   <FloatButton.BackTop style={{ marginBottom: "60px" }} />
  </div>
 );
};

export default MovieDetail;
