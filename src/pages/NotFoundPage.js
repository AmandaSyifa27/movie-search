import React from "react";
import NotFoundPageImg from "../assets/PageNotFound.svg";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoIosRefresh } from "react-icons/io";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
 return (
  <div
   style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    marginTop: "20%",
    textAlign: "center",
   }}
  >
   <img
    src={NotFoundPageImg}
    alt="Not Found Page"
    style={{
     width: "60%",
     marginBottom: " 10px",
    }}
   />
   <em style={{ color: "#001529" }}>
    Looks like you are lost, try to enter the correct url, thanks
   </em>
   😊
   <div
    style={{
     display: "flex",
     flexDirection: "row",
     marginTop: "10px",
    }}
   >
    <Link
     to="/"
     style={{
      display: "flex",
      alignItems: "center",
      color: "#607cb6",
     }}
    >
     <BiLeftArrowAlt />
     Back to Home
    </Link>
    <div
     onClick={() => window.location.reload(false)}
     style={{
      display: "flex",
      alignItems: "center",
      marginLeft: "10px",
     }}
    >
     ||
     <IoIosRefresh
      style={{
       marginLeft: "5px",
       marginBottom: "-1px",
       color: "#607cb6",
      }}
     />
    </div>
   </div>
  </div>
 );
};

export default NotFoundPage;
