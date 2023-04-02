import React from "react";
import { Spin } from "antd";

const Loading = () => {
 return (
  <div className="loading">
   <Spin tip="Loading" size="large" />
  </div>
 );
};

export default Loading;
