import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loading = () => {
 return (
  <div className="loading">
   {/* <LoadingOutlined /> */}
   <Spin tip="Loading" size="large" />
  </div>
 );
};

export default Loading;
