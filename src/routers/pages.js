import React from "react";
import { Outlet } from "react-router-dom";
import Layoute from "../components/Layoute";
const Pages = () => {
 return (
  <Layoute>
   <Outlet />
  </Layoute>
 );
};
export default Pages;
