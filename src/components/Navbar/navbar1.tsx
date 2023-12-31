import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as IOIcons from "react-icons/io5";
import { useState } from "react";
import * as FaUIcons from "react-icons/fa";
import * as IoUIcons from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logos.svg";
import chualogin from "../../images/Chualogin.svg";
import noti from "../../images/Noti.svg";
import { Input, Avatar, Row, Col, Dropdown, Button, MenuProps } from "antd";
import { ConfigProvider } from "antd";
//thêm màu cho selected color
import { IoMdNotificationsOutline, IoMdPerson } from "react-icons/io";
import React from "react";
import useUser from "../../hooks/useUser";
import supabase from "../../app/supabase";
import { ImBook } from "react-icons/im";

const style: React.CSSProperties = {
  marginTop: 5,
  marginBottom: 5,
  fontSize: 18,
  display: "flex",
  flexDirection: "row",
  color: "black",
};

const mangas = [
  "de39f90b-1971-4752-acc6-7ffa9514b80d",
  "23fcaa75-6014-4717-a65b-4404de36bbb7",
  "b1cdaef6-40fa-4560-9566-412adcba4501",
  "14dbd918-b502-4587-9cbe-b7d18d2b7caa",
  "4b0aa647-9dbd-4a76-8a2b-cefd9b2bcc35",
  "af582f8e-de8d-45b4-b3aa-4d35c9b5a1b4",
  "d0fcff69-2379-467f-b84d-b6699539477d",
  "833d22af-2811-4df7-97d2-f9087acd5f37",
  "e2971936-806b-4a91-9992-090e4af47c36",
  "c1c4d961-2e36-4641-8814-f9099df51e41",
  "745a1fcf-c932-4650-b58f-6ce0a4ab6070",
  "db6880ab-2476-4a0f-a030-34069cf4a3f8",
  "79f89fad-7aae-4213-b030-d8c571728e1c",
  "b2c36cb6-4c66-4ed1-a075-2880d16755e6",
  "012ab374-8c20-4417-9d1c-1f4a3a4547e0",
];

//fix mangaid list sau

const getRandomElement = () => {
  const randomIndex = Math.floor(Math.random() * mangas.length);
  return mangas[randomIndex];
};

const SlidebarData = [
  {
    title: "Dành cho tôi",
    path: "",
    icon: <IoUIcons.IoMdPerson style={{ fontSize: 26 }} />,
    cName: "nav-title",
  },
  {
    title: "Theo dõi",
    path: "/truyen-theo-doi",
    cName: "nav-button",
  },
  {
    title: "Lịch sử đọc truyện",
    path: "/lich-su",
    cName: "nav-button",
  },
  {
    title: "Truyện đã đăng",
    path: "/truyen-da-dang",
    cName: "nav-button",
  },
  {
    title: "Điểm thưởng",
    path: "/diem-dich-truyen",
    cName: "nav-button",
  },
  {
    title: "Đọc truyện",
    path: "",
    icon: <FaUIcons.FaBook style={{ fontSize: 20 }} />,
    cName: "nav-title",
  },
  {
    title: "Xem nhiều nhất",
    path: "/xem-nhieu-nhat",
    cName: "nav-button",
  },
  {
    title: "Tìm kiếm nâng cao",
    path: "/tim-kiem-nang-cao",
    cName: "nav-button",
  },
  {
    title: "Chọn ngẫu nhiên",
    path: "",
    cName: "nav-button",
  },
  {
    title: "Quản lý tài khoản",
    path: "/",
    icon: <IoUIcons.IoMdSettings style={{ fontSize: 23 }} />,
    cName: "nav-title",
  },
  {
    title: "Trang cá nhân",
    path: "/trang-ca-nhan",
    cName: "nav-button",
  },
  {
    title: "Đổi mật khẩu",
    path: "/doi-mat-khau",
    cName: "nav-button",
  },
];
function Navbar1() {
  const user = useUser();
  let avt = user.data?.user_metadata.avt;
  let ten = user.data?.user_metadata.ten;
  let ho = user.data?.user_metadata.ho;
  if (avt == null) {
    avt =
      "https://zrhhzqtaizoqtwmnzzbi.supabase.co/storage/v1/object/public/avt/public/Chualogin.svg";
    ho = "Tên ";
    ten = "người dùng";
    //avt=null => login bằng gg (login bằng email có truyền data)
  }
  if (ho == null) {
    ho = "";
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
          <h3 style={{ marginBottom: 15, fontSize: 19 }}>{ho + " " + ten}</h3>
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
  const navigate = useNavigate();
  const TitleOrButton = (item: any) => {
    if (item.title == "Chọn ngẫu nhiên") {
      return (
        <button
          className={item.cName}
          onClick={() => {
            console.log("a");
            showSlidebar();
            const newRandomElement = getRandomElement();
            navigate(`/noi-dung/${newRandomElement}`);
          }}
        >
          {item.icon}
          <span style={{ marginLeft: 12 }}>{item.title}</span>
        </button>
      );
    }
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
                      src={avt}
                      style={{ marginTop: 10, marginLeft: 40 }}
                    ></Avatar>
                  </Dropdown>
                )}
              </Col>
            </Row>
          </div>
          <div className="line" />
        </div>
        <nav
          className={slidebar ? "nav-menu active" : "nav-menu"}
          style={{ overflowY: "auto" }}
        >
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
                  style={{
                    paddingLeft: 35,
                    width: "170%",
                  }}
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
                  style={{
                    paddingLeft: 35,
                    width: "90%",
                  }}
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
