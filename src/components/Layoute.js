import React, { useState } from "react";
import {
 MenuFoldOutlined,
 MenuUnfoldOutlined,
 VideoCameraOutlined,
 SearchOutlined,
 FireOutlined,
 LineChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Input } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import APIRequest from "../apis/APIRequest";
const { Header, Sider, Content } = Layout;

const Layoute = ({ children }) => {
 const navigate = useNavigate();
 const { Search } = Input;
 const [collapsed, setCollapsed] = useState(false);
 const {
  token: { colorBgContainer },
 } = theme.useToken();
 const handlePath = (path) => {
  navigate(path);
 };
 const [movies, setMovies] = useState();

 const handleSearch = async (value) => {
  //   console.log(value);
  const result = await APIRequest.getSearchCar(value);
  if ((result.status = "200")) {
   //    console.log(result);
   setMovies(result.data.results);
  }
 };

 return (
  <Layout className="layout">
   <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="logo"></div>
    <Menu
     theme="dark"
     mode="inline"
     defaultSelectedKeys={["1"]}
     items={[
      {
       key: "1",
       icon: <SearchOutlined />,
       label: "Search",
       onClick: () => handlePath("/"),
      },
      {
       key: "2",
       icon: <LineChartOutlined />,
       label: "Most Popular",
       onClick: () => handlePath("/most-popular"),
      },
      {
       key: "3",
       icon: <FireOutlined />,
       label: "Top 250",
       onClick: () => handlePath("/top-250"),
      },
      {
       key: "4",
       icon: <VideoCameraOutlined />,
       label: "Box Office",
       onClick: () => handlePath("/box-office"),
      },
     ]}
    />
   </Sider>
   <Layout className="site-layout">
    <Header
     style={{
      paddingLeft: 10,
      background: colorBgContainer,
     }}
    >
     {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: "trigger",
      onClick: () => setCollapsed(!collapsed),
     })}
     <Search
      className="search-input"
      placeholder="input search text"
      allowClear
      onSearch={handleSearch}
     />
    </Header>

    <Content>{children}</Content>
   </Layout>
  </Layout>
 );
};

export default Layoute;
