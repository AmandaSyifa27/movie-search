import React, { useState } from "react";
import { useParams } from "react-router-dom";
import APIRequest from "../apis/APIRequest";
import Loading from "./Loading";
import { Collapse, Divider, message } from "antd";
import { TbTrophyOff } from "react-icons/tb";

const MovieAwards = () => {
 const [awards, setAwards] = useState();
 const params = useParams();
 const { Panel } = Collapse;
 const [messageApi, contextHolder] = message.useMessage();

 React.useEffect(() => {
  const fetchAwards = async () => {
   const res = await APIRequest.getMovieAwards(`${params.movieId}`);
   setAwards(res.data.items);
  };
  fetchAwards().catch((error) => {
   return messageApi.error("Failed to fetch movie awards, Sorry😓");
  });
 }, [params.movieId]);

 return (
  <div className="awards-container">
   {contextHolder}
   {awards ? (
    awards.map((award) => {
     return (
      <Collapse size="large">
       <Panel
        className="panel-title"
        header={`${award.eventTitle} ${award.eventYear}`}
       >
        {award.outcomeItems.map((outcome) => {
         return (
          <div>
           <Divider orientation="left">{outcome.outcomeCategory}</Divider>
           <Collapse ghost className="collapse2">
            <Panel header={outcome.outcomeTitle}>
             <div>
              <ul>
               {outcome.outcomeDetails.map((detail) => {
                return <li>{detail.plainText}</li>;
               })}
              </ul>
             </div>
            </Panel>
           </Collapse>
          </div>
         );
        })}
       </Panel>
      </Collapse>
     );
    })
   ) : (
    <Loading />
   )}
  </div>
 );
};

export default MovieAwards;
