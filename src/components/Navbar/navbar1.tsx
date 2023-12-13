import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as IOIcons from "react-icons/io5";
import { useState } from "react";
import { SlidebarData } from "./SlidebarData";
import { items } from "./DropdownData";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logos.svg";
import chualogin from "../../images/Chualogin.svg";
import noti from "../../images/Noti.svg";
import { Input, Avatar, Row, Col, Dropdown } from "antd";
import { ConfigProvider } from "antd";
//thêm màu cho selected color
import { IoMdNotificationsOutline } from "react-icons/io";
import React from "react";
import useUser from "../../hooks/useUser";
import supabase from "../../app/supabase";
function Navbar1() {
  const user = useUser();
  async function signout() {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
    if (error) {
      throw error;
    }
  }
  const [p, setPath] = useState("");
  const loca = useLocation();
  React.useEffect(() => {
    // Google Analytics
    setPath(window.location.pathname);
  }, [loca]);
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
        <div className={item.cName}>
          {item.icon}
          <span>{item.title}</span>
        </div>
      );
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
        <div className="fixed">
          <div className="navbar">
            <div className={slidebar ? "bg" : ""} />
            <Row>
              <Col span={6}>
                <div style={{ display: "flex" }}>
                  <button className="open-menu" onClick={showSlidebar}>
                    <FaIcons.FaBars
                      style={{ marginTop: 14, marginRight: 40 }}
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
                />
                {user.data == null ? (
                  <Link to="/dang-nhap">
                    <Avatar
                      size={"large"}
                      src={chualogin}
                      style={{ marginTop: 10, marginLeft: 40 }}
                    >
                      {" "}
                    </Avatar>
                  </Link>
                ) : (
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <Avatar
                      size={"large"}
                      src={chualogin}
                      style={{ marginTop: 10, marginLeft: 40 }}
                    ></Avatar>
                  </Dropdown>
                )}
              </Col>
            </Row>
          </div>
          <div className="line" />
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
                  style={{ paddingLeft: 35 }}
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
            {user.data != null ? (
              <li key={0} className="nav-title" style={{ paddingLeft: 0 }}>
                <button
                  className="nav-title-button"
                  onClick={() => signout()}
                  style={{ paddingLeft: 35 }}
                >
                  <IOIcons.IoLogOut style={{ fontSize: 25 }} />
                  <span>Đăng xuất</span>
                </button>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </nav>
      </div>
    </ConfigProvider>
  );
}

export default Navbar1;
