import React from "react";
import Layoute from "../components/Layoute";
import { Outlet } from "react-router-dom";
const Pages = () => {
 return (
  <Layoute>
   <Outlet />
  </Layoute>
 );
};
export default Pages;
