import React from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as IOIcons from "react-icons/io5";
import { useState } from "react";
import { SlidebarData } from "./SlidebarData";
import { Link } from "react-router-dom";
import logo from "D:/MangaOne/src/images/logos.svg";
//thêm màu cho selected color
function Navbar() {
  const [slidebar, setslidebar] = useState(false);
  const showSlidebar = () => setslidebar(!slidebar);
  const TitleOrButton = (item: any) => {
    if (item.cName == "nav-button")
      return (
        <Link to={item.path} style={{ textDecoration: "none" }}>
          <button className={item.cName} onClick={showSlidebar}>
            {item.icon}
            <span>{item.title}</span>
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
    <div style={{ textAlign: "start" }}>
      <div className="navbar">
        <button className="open-menu" onClick={showSlidebar}>
          <FaIcons.FaBars />
        </button>
      </div>
      <div className="line" />
      <nav className={slidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="menu-toggle">
            <Link to="/" style={{ display: "flex" }} onClick={showSlidebar}>
              <img
                src={logo}
                alt=""
                width={55}
                height={55}
                style={{ marginLeft: 20, marginRight: 10 }}
              />
              <h1 style={{ fontSize: 25, marginTop: 15, marginRight: 10 }}>
                MangaOne
              </h1>
            </Link>
            <button className="close-menu" onClick={showSlidebar}>
              <aiIcons.AiOutlineClose />
            </button>
          </li>
          <li key={0} className="nav-title">
            <Link to="/">
              <button className="nav-title-button" onClick={showSlidebar}>
                <FaIcons.FaHome style={{ fontSize: 25 }} />
                <span>Trang chủ</span>
              </button>
            </Link>
          </li>
          {SlidebarData.map((item, index) => (
            <div>
              <li key={index} style={{ paddingLeft: 30 }}>
                {TitleOrButton(item)}
              </li>
            </div>
          ))}
          <li key={0} className="nav-title">
            <Link to="">
              <button className="nav-title-button" onClick={showSlidebar}>
                <IOIcons.IoLogOut style={{ fontSize: 25 }} />
                <span>Đăng xuất</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
