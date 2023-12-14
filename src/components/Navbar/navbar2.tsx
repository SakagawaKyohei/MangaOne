import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as IOIcons from "react-icons/io5";
import { useEffect, useState } from "react";
import { SlidebarData } from "./SlidebarData";
import { items } from "./DropdownData";
import { Link } from "react-router-dom";
import logo from "../../images/logos.svg";
import chualogin from "../../images/Chualogin.svg";
import noti from "../../images/Noti.svg";
import { Input, Avatar, Row, Col } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";

import { ConfigProvider } from "antd";
//thêm màu cho selected color

//tìm cách gộp chung navbar, thay đổi trạng thái tùy theo độ cao chứ không phải giây

import { Dropdown } from "antd";
function Navbar2() {
  const { Search } = Input;
  const [slidebar, setslidebar] = useState(false);
  const showSlidebar = () => setslidebar(!slidebar);
  const TitleOrButton = (item: any) => {
    if (item.cName == "nav-button")
      return (
        <Link to={item.path} style={{ textDecoration: "none" }}>
          <button className={item.cName} onClick={showSlidebar}>
            {item.icon}
            <span style={{ marginLeft: 12 }}>{item.title}</span>
          </button>
        </Link>
      );
    else
      return (
        <div className={item.cName} id="navbar">
          {item.icon}
          <span>{item.title}</span>
        </div>
      );
  };

  const [navbarBackground, setNavbarBackground] = useState<boolean>(true);
  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };

    return () => {
      window.onscroll = null;
    };
  }, []);
  const scrollFunction = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setNavbarBackground(false);
      } else {
        setNavbarBackground(true);
      }
    }
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF9040",
          borderRadius: 10,
        },
      }}
    >
      <div
        style={{ textAlign: "start" }}
        onClick={slidebar ? showSlidebar : undefined}
      >
        <div className={navbarBackground ? "fixed t" : "fixed"}>
          <div className="navbar">
            <div className={slidebar ? "bg" : ""} />
            <Row>
              <Col span={6}>
                <div style={{ display: "flex" }}>
                  <button className="open-menu" onClick={showSlidebar}>
                    <FaIcons.FaBars
                      style={{ marginTop: 14, marginRight: 40 }}
                      className={navbarBackground ? "textnav t" : "textnav"}
                    />
                  </button>
                  <Link
                    to="/"
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <img
                      src={logo}
                      alt=""
                      width={55}
                      height={55}
                      style={{ marginRight: 5 }}
                    />
                    <h1
                      style={{ fontSize: 25, marginTop: 15, marginRight: 10 }}
                      className={navbarBackground ? "textnav t" : "texnav"}
                    >
                      MangaOne
                    </h1>
                  </Link>
                </div>
              </Col>
              <Col span={10} offset={2}>
                <Search
                  placeholder="Tìm truyện"
                  style={{ width: "100%", paddingTop: 12 }}
                />
              </Col>
              <Col
                offset={2}
                span={4}
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <IoMdNotificationsOutline
                  fontSize={35}
                  style={{ marginTop: 13 }}
                  className={navbarBackground ? "textnav t" : "texnav"}
                />

                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Avatar
                    size={"large"}
                    src={chualogin}
                    style={{ marginTop: 10, marginLeft: 40 }}
                  ></Avatar>
                </Dropdown>
              </Col>
            </Row>
          </div>
          <div className={navbarBackground ? "line t" : "line"} />
        </div>
        <nav className={slidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="menu-toggle">
              <Link to="/" style={{ display: "flex" }} onClick={showSlidebar}>
                <img
                  src={logo}
                  alt=""
                  width={55}
                  height={55}
                  style={{ marginLeft: 23, marginRight: 10 }}
                />
                <h1 style={{ fontSize: 25, marginTop: 15, marginRight: 10 }}>
                  MangaOne
                </h1>
              </Link>
              <button className="close-menu" onClick={showSlidebar}>
                <aiIcons.AiOutlineClose />
              </button>
            </li>
            <li key={0} className="nav-title" style={{ paddingLeft: 0 }}>
              <Link to="/">
                <button
                  className="nav-title-button"
                  onClick={showSlidebar}
                  style={{ paddingLeft: 35, color: "black", width: "90%" }}
                >
                  <FaIcons.FaHome style={{ fontSize: 25 }} />
                  <span>Trang chủ</span>
                </button>
              </Link>
            </li>
            {SlidebarData.map((item, index) => (
              <div>
                <li key={index}>{TitleOrButton(item)}</li>
              </div>
            ))}
            <li key={0} className="nav-title" style={{ paddingLeft: 0 }}>
              <Link to="">
                <button
                  className="nav-title-button"
                  onClick={showSlidebar}
                  style={{ paddingLeft: 35, width: "90%" }}
                >
                  <IOIcons.IoLogOut style={{ fontSize: 25 }} />
                  <span>Đăng xuất</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </ConfigProvider>
  );
}

export default Navbar2;
