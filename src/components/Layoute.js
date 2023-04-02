import React, { useEffect, useState } from "react";
import { Layout, Menu, theme, Input } from "antd";
import {
 MenuFoldOutlined,
 MenuUnfoldOutlined,
 VideoCameraOutlined,
 SearchOutlined,
 FireOutlined,
 LineChartOutlined,
} from "@ant-design/icons";
import { SiThemoviedatabase } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Layoute = ({ children }) => {
 const navigate = useNavigate();
 const [collapsed, setCollapsed] = useState(false);
 const [mobileScreen, setMobileScreen] = useState(false);
 const {
  token: { colorBgContainer },
 } = theme.useToken();
 const handlePath = (path) => {
  navigate(path);
 };

 useEffect(() => {
  const handleResize = () => {
   if (window.innerWidth < 700) {
    setMobileScreen(true);
    setCollapsed(true);
   } else {
    setMobileScreen(false);
    setCollapsed(false);
   }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 return (
  <Layout className="layout">
   <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="md">
    <div
     className="logo"
     style={{
      display: "flex",
      justifyContent: "center",
      padding: "0 4px 4px 4px",
     }}
    >
     <SiThemoviedatabase
      style={{
       fontSize: "-webkit-xxx-large",
      }}
     />
    </div>
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
    </Header>

    <Content>{children}</Content>
   </Layout>
  </Layout>
 );
};

export default Layoute;
