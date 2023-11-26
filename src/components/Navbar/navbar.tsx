import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as IOIcons from "react-icons/io5";
import { useState } from "react";
import { SlidebarData } from "./SlidebarData";
import { items } from "./DropdownData";
import { Link } from "react-router-dom";
import logo from "/MangaOne/src/images/logos.svg";
import chualogin from "/MangaOne/src/images/Chualogin.svg";
import noti from "D:/MangaOne/src/images/Noti.svg";
import { Input, Avatar, Row, Col } from "antd";
import { ConfigProvider } from "antd";
//thêm màu cho selected color

import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { click } from "@testing-library/user-event/dist/click";
function Navbar() {
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
                      style={{ fontSize: 25, marginTop: 10, marginRight: 10 }}
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
                <img
                  src={noti}
                  height={30}
                  width={30}
                  style={{ marginTop: 13 }}
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
            <li key={0} className="nav-title" style={{ paddingLeft: 0 }}>
              <Link to="">
                <button
                  className="nav-title-button"
                  onClick={showSlidebar}
                  style={{ paddingLeft: 35 }}
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

export default Navbar;
