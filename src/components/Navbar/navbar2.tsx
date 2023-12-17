import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as IOIcons from "react-icons/io5";
import { useEffect, useState } from "react";
import { SlidebarData } from "./SlidebarData";
import { Link } from "react-router-dom";
import logo from "../../images/logos.svg";
import chualogin from "../../images/Chualogin.svg";
import noti from "../../images/Noti.svg";
import { Input, Avatar, Row, Col, MenuProps } from "antd";
import { IoMdNotificationsOutline, IoMdPerson } from "react-icons/io";

import { ConfigProvider } from "antd";
//thêm màu cho selected color

//tìm cách gộp chung navbar, thay đổi trạng thái tùy theo độ cao chứ không phải giây

import { Dropdown } from "antd";
import useUser from "../../hooks/useUser";
import { ImBook } from "react-icons/im";
import supabase from "../../app/supabase";
function Navbar2() {
  const user = useUser();
  const avt = user.data?.user_metadata.avt;
  const style: React.CSSProperties = {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
    color: "black",
  };

  async function signout() {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
    if (error) {
      throw error;
    }
  }
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="label"
        >
          <Avatar
            src={avt}
            style={{
              height: 75,

              width: 75,
              marginBottom: 13,
              marginTop: 13,
              marginLeft: 75,
              marginRight: 75,
            }}
          ></Avatar>
          <h3 style={{ marginBottom: 15, fontSize: 19 }}>
            {user.data?.user_metadata.ten + " " + user.data?.user_metadata.ho}
          </h3>
          <div
            className="line"
            style={{ width: "100%", background: "rgba(0, 0, 0, 0.12)" }}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <Link style={style} to="/trang-ca-nhan">
          <IoMdPerson style={{ fontSize: 25, marginRight: 13, marginTop: 2 }} />
          <p>Trang cá nhân</p>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/truyen-theo-doi-2" style={style}>
          <FaIcons.FaBookmark
            style={{
              fontSize: 20,
              marginRight: 15,
              marginTop: 5,
              marginLeft: 3,
            }}
          />
          <p>Theo dõi</p>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="/truyen-da-dang" style={style}>
          <ImBook
            style={{
              fontSize: 20,
              marginRight: 15,
              marginTop: 5,
              marginLeft: 3,
            }}
          />
          <p>Truyện đã đăng</p>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <div style={style} onClick={signout}>
          <IOIcons.IoLogOut
            style={{ fontSize: 27, marginRight: 12, marginLeft: 4 }}
          />
          <p style={{ marginLeft: -3 }}>Đăng xuất</p>
        </div>
      ),
    },
  ];
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
                      src={avt}
                      style={{ marginTop: 10, marginLeft: 40 }}
                    ></Avatar>
                  </Dropdown>
                )}
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
