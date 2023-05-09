import React, { useState } from "react";
import APIRequest from "../apis/APIRequest";
import { Collapse, Divider } from "antd";
import ErrorAward from "../assets/NoAwards.svg";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const MovieAwards = () => {
 const [awards, setAwards] = useState([]);
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(true);
 const params = useParams();
 const { Panel } = Collapse;

 React.useEffect(() => {
  const fetchAwards = async () => {
   const res = await APIRequest.getMovieAwards(`${params.movieId}`);
   setAwards(res.data.items);
   setLoading(false);
   if (res.data.items.length === 0) {
    setError(true);
   }
   console.log(res);
  };
  fetchAwards().catch((error) => {
   setError(true);
  });
 }, [params.movieId]);

 console.log(awards);

 return (
  <div className="awards-container">
   {error ? (
    <div className="err">
     <img src={ErrorAward} alt="Award Not Found" />
     <em>No awards, or it may be a server side error</em>
    </div>
   ) : (
    <>
     {loading ? (
      <Loading />
     ) : (
      awards &&
      awards.map((award) => {
       return (
        <Collapse size="large">
         <Panel className="panel-title" header={`${award.eventTitle}`}>
          <div>
           <ul>
            {award.awardEventDetails &&
             award.awardEventDetails.map((eventDetail) => {
              return <li>{eventDetail.title}</li>;
             })}
           </ul>
          </div>
         </Panel>
        </Collapse>
       );
      })
     )}{" "}
    </>
   )}
  </div>
 );
};

export default MovieAwards;
