// // /* eslint-disable jsx-a11y/anchor-is-valid */
// // /* eslint-disable react/prop-types */
// // import React, { useState, useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //  HomeOutlined,
// //  CarOutlined,
// //  MenuOutlined,
// //  DownOutlined,
// //  LogoutOutlined,
// // } from "@ant-design/icons";
// // import {
// //  Input,
// //  Layout,
// //  Menu,
// //  Breadcrumb,
// //  Dropdown,
// //  Space,
// //  Row,
// //  Col,
// // } from "antd";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // const { Search } = Input;
// // import Auth from "../utils/Auth";
// // import Helmet from "react-helmet";
// // import "../assets/css/layout.css";
// // import { setPayload } from "../store/features/searchCarsSlice";
// // import { searchPayloadSearchCars } from "../store/features/searchCarsSlice";
// // import Search from "antd/es/input/Search";
// // import Logo2 from "../assets/img/logo-2.png";
// // import User from "../assets/img/user.png";

// // const { Header, Sider, Content } = Layout;

// // const dataRouters = [
// //  {
// //   key: 0,
// //   name: "Dashboard",
// //   path: "/",
// //  },
// //  {
// //   key: 1,
// //   name: "List Car",
// //   path: "/car-list",
// //   child: [
// //    {
// //     key: 2,
// //     name: "Add New Car",
// //     path: "/add-car",
// //    },
// //    {
// //     key: 3,
// //     name: "Edit Car",
// //     path: "/edit-car",
// //    },
// //   ],
// //  },
// // ];

// // const generateTitle = (routeList, path) => {
// //  const paths = path.split("/");
// //  const currentPath = `/${paths[1]}`;
// //  const childPath = `/${paths.slice(2).join("/")}`;
// //  let pathList = [];
// //  let pathListtemp = [];

// //  const route = routeList.find((val) => val.path === currentPath);

// //  if (route) {
// //   pathList.push({ name: route.name, path: route.path });
// //   if (route.child) {
// //    pathListtemp = generateTitle(route.child, childPath);
// //    pathList.push(...pathListtemp);
// //   }
// //  }
// //  return pathList;
// // };

// // const Headers = () => {
// //  const location = useLocation();
// //  const [data, setData] = useState();

// //  useEffect(() => {
// //   setData(generateTitle(dataRouters, location.pathname));
// //  }, [location.pathname]);

// //  return (
// //   data && (
// //    <>
// //     <Helmet>
// //      <title>{data[data.length - 1].name} - BCR Admin</title>
// //     </Helmet>

// //     <Breadcrumb className="breadcrumb-layout" separator=">">
// //      {data.map((item, i) => {
// //       if (i !== data.length - 1) {
// //        return (
// //         <Breadcrumb.Item key={item.path}>
// //          <Link to={item.path}>{item.name}</Link>
// //         </Breadcrumb.Item>
// //        );
// //       } else
// //        return <Breadcrumb.Item key={item.path}>{item.name}</Breadcrumb.Item>;
// //      })}
// //     </Breadcrumb>
// //    </>
// //   )
// //  );
// // };

// // const Layouts = ({ children }) => {
// //  const navigate = useNavigate();
// //  const dispatch = useDispatch();
// //  const [collapsed, setCollapsed] = useState(false);
// //  const { payload } = useSelector(searchPayloadSearchCars);

// //  const items = [
// //   {
// //    key: "1",
// //    label: (
// //     <a rel="noopener noreferrer" onClick={() => Auth.logOut(navigate)}>
// //      <Space>
// //       <LogoutOutlined />
// //       Logout
// //      </Space>
// //     </a>
// //    ),
// //   },
// //  ];

// //  const handleClick = (path) => {
// //   navigate(path);
// //  };

// //  const onSearch = (value) => {
// //   dispatch(setPayload({ ...payload, name: value, page: 1, category: "" }));
// //   navigate("/car-list");
// //  };

// //  const handleOnchange = (e) => {
// //   if (e.target.value === "") {
// //    dispatch(setPayload({ ...payload, name: e.target.value, page: 1 }));
// //    navigate("/car-list");
// //   }
// //  };
// //  return (
// //   <Layout>
// //    <Sider id="sider-layout" trigger={null} collapsible collapsed={collapsed}>
// //     <div className="logo">
// //      <img src={Logo2} alt="logo" />
// //     </div>
// //     <Menu
// //      className="menu-layout"
// //      theme="dark"
// //      mode="inline"
// //      defaultSelectedKeys={["11"]}
// //      defaultOpenKeys={["1"]}
// //      items={[
// //       {
// //        key: "1",
// //        icon: <HomeOutlined />,
// //        label: "Dashboard",
// //        children: [{ key: "11", label: "Dashboard" }],
// //        onClick: () => handleClick("/"),
// //       },
// //       {
// //        key: "2",
// //        icon: <CarOutlined />,
// //        label: "Cars",
// //        children: [{ key: "21", label: "Car List" }],
// //        onClick: () => handleClick("/car-list"),
// //       },
// //      ]}
// //     />
// //    </Sider>
// //    <Layout className="site-layout">
// //     <Header className="header-layout">
// //      <Row>
// //       <Col span={12}>
// //        {React.createElement(MenuOutlined, {
// //         className: "trigger",
// //         onClick: () => setCollapsed(!collapsed),
// //        })}
// //       </Col>
// //       <Col className="col-header" span={12}>
// //        <Search
// //         className="header-search"
// //         placeholder="enter car name"
// //         onSearch={onSearch}
// //         onChange={handleOnchange}
// //         enterButton="Search"
// //        />
// //        <img className="img-user" src={User} alt="user" />
// //        <Dropdown menu={{ items }}>
// //         <a onClick={(e) => e.preventDefault()}>
// //          <Space>
// //           admin
// //           <DownOutlined />
// //          </Space>
// //         </a>
// //        </Dropdown>
// //       </Col>
// //       <Search
// //        placeholder="input search text"
// //        allowClear
// //        onSearch={onSearch}
// //        style={{
// //         width: 200,
// //        }}
// //       />
// //      </Row>
// //     </Header>
// //     <div className="div-content">
// //      <Headers />
// //      <Content>{children}</Content>
// //     </div>
// //    </Layout>
// //   </Layout>
// //  );
// // };

// // export default Layouts;

// // import Button from "react-bootstrap/Button";
// // import React from "react";
// // import Card from "react-bootstrap/Card";
// // import "../assets/css/cardCar.css";
// // import Container from "react-bootstrap/Container";
// // import Col from "react-bootstrap/Col";
// // import Row from "react-bootstrap/Row";
// // import { useNavigate } from "react-router-dom";

// // const CardCar = (props) => {
// //  const carData = props.carDataCard;
// //  const payload = props.payloadCard;

// //  const navigate = useNavigate();

// //  const toDetilMobil = (id) => (e) => {
// //   e.preventDefault();
// //   navigate(`/detil-mobil/${id}`, {
// //    state: { payload: payload },
// //   });
// //  };

// //  return (
// //   <Container className="card-list">
// //    <Row id="card-car">
// //     {carData.map((car) => (
// //      <Col lg={4} md={6} sm={12} className="mb-4">
// //       <Card className="shadow-sm">
// //        <Card.Img
// //         variant="top"
// //         src={car.image}
// //         alt={car.name}
// //         className="mb-3"
// //         style={{ height: "14rem" }}
// //        />
// //        <Card.Body>
// //         <h6>{car.name}</h6>
// //         <Card.Title className="fw-bold my-3">Rp. {car.price} / hari</Card.Title>
// //         <Card.Text>
// //          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// //          tempor incididunt ut labore et dolore magna aliqua.
// //         </Card.Text>
// //        </Card.Body>
// //        <Card.Body>
// //         <Button
// //          variant="success"
// //          type="submit"
// //          className="btn-card"
// //          onClick={toDetilMobil(car.id)}
// //         >
// //          Pilih Mobil
// //         </Button>
// //        </Card.Body>
// //       </Card>
// //      </Col>
// //     ))}
// //    </Row>
// //   </Container>
// //  );
// // };

// // export default CardCar;

// import axios from "axios";
// import React, { useState } from "react";
// import { Offcanvas, Navbar, Nav, Container, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Components/Footer";
// import carImg from "../assets/img_car2.png";

// const SearchPage = () => {
//  const navigate = useNavigate();

//  const [cars, setCars] = useState([]);

//  const handelSearch = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const name = formData.get("name");
//   const category = formData.get("category");
//   const isRented = formData.get("isRented") === "true" ? true : false;
//   const price = formData.get("price");

//   let minPrice = 0;
//   let maxPrice = 0;

//   if (price === "cheap") {
//    minPrice = 0;
//    maxPrice = 400000;
//   }
//   if (price === "medium") {
//    minPrice = 400000;
//    maxPrice = 600000;
//   }
//   if (price === "expensive") {
//    minPrice = 600000;
//    maxPrice = 10000000;
//   }

//   const params = {
//    name,
//    category,
//    isRented,
//    minPrice,
//    maxPrice,
//   };

//   const result = await axios.get(
//    "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car",
//    {
//     params,
//     headers: {
//      access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc`,
//     },
//    }
//   );
//   if (result.status === 200) {
//    console.log(result.data);
//    setCars(result.data.cars);
//    navigate("/result", {
//     state: {
//      cars: result.data.cars,
//      params,
//     },
//    });
//   }
//  };

//  return (
//   <div>
//    <header>
//     {["xl"].map((expand) => (
//      <Navbar key={expand} expand={expand} className="mb-3">
//       <Container fluid>
//        <div className="logo">
//         <svg
//          width="100"
//          height="34"
//          viewBox="0 0 100 34"
//          fill="none"
//          xmlns="http://www.w3.org/2000/svg"
//         >
//          <rect width="100" height="34" fill="#0D28A6" />
//         </svg>
//        </div>
//        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//        <Navbar.Offcanvas
//         className="navig"
//         aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//         placement="end"
//        >
//         <Offcanvas.Header closeButton></Offcanvas.Header>
//         <Offcanvas.Body>
//          <Nav className="side-bar justify-content-end flex-grow-1 pe-3 color-black">
//           <Nav.Link href="/#Our_container2-service">Our Service</Nav.Link>
//           <Nav.Link href="/#Why_Us">Why Us</Nav.Link>
//           <Nav.Link href="/#Testimonial">Testimonial</Nav.Link>
//           <Nav.Link href="/#FAQ">FAQ</Nav.Link>
//          </Nav>
//         </Offcanvas.Body>
//        </Navbar.Offcanvas>
//       </Container>
//      </Navbar>
//     ))}

//     <div className="container1-header" id="yoo">
//      <div className="article1">
//       <h1>
//        <strong>Sewa & Rental Mobil Terbaik di kawasan Indramayu</strong>
//       </h1>
//       <br />
//       <p>
//        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
//        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
//        sewa mobil selama 24 jam.
//       </p>
//      </div>
//      <div className="imgcar">
//       <img src={carImg} alt="gambar" />
//      </div>
//     </div>
//    </header>
//    <div className="form">
//     <form onSubmit={handelSearch} className="input">
//      <div className="input-child">
//       <Form.Label>Nama Mobil</Form.Label>
//       <Form.Control
//        name="name"
//        placeholder="Ketik nama/tipe mobil"
//        aria-describedby="passwordHelpBlock"
//        // onChange={(e) => setQuery(e.target.value)}
//       />
//      </div>
//      <div className="input-child">
//       <Form.Label>Kategori</Form.Label>
//       <Form.Select name="category" aria-label="Default select example">
//        <option disabled selected>
//         Masukkan Kapasitas Mobil
//        </option>
//        <option value="small">2-4 orang</option>
//        <option value="medium">4-6 orang</option>
//        <option value="large">6-8 orang</option>
//       </Form.Select>
//      </div>
//      <div className="input-child">
//       <Form.Label>Harga</Form.Label>
//       <Form.Select name="price" aria-label="Default select example">
//        <option disabled selected option>
//         Masukan Harga Sewa per Hari
//        </option>
//        <option value="cheap">&lt;Rp.400.000</option>
//        <option value="medium">Rp.400.000-Rp.600.000</option>
//        <option value="expensive">&gt;Rp.600.000</option>
//       </Form.Select>
//      </div>
//      <div className="input-child">
//       <Form.Label>Status</Form.Label>
//       <Form.Select name="isRented" aria-label="Default select example">
//        <option value="true">Disewa</option>
//        <option value="false">Tersedia</option>
//       </Form.Select>
//      </div>
//      <button type="submit">
//       <strong>Cari Mobil</strong>
//      </button>
//     </form>
//    </div>
//    <Footer />
//   </div>
//  );
// };

// export default SearchPage;
