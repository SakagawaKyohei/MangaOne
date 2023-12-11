import chualogin from "/MangaOne/src/images/Chualogin.svg";
import { Avatar, MenuProps } from "antd";
import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaBookmark } from "react-icons/fa6";
import { ImBook } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import supabase from "../../app/supabase";
import { error } from "console";
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
  if (error) {
    throw error;
  }
}

export const items: MenuProps["items"] = [
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
          src={chualogin}
          style={{
            height: 50,
            width: "auto",
            marginBottom: 13,
            marginTop: 13,
            marginLeft: 75,
            marginRight: 75,
          }}
        ></Avatar>
        <h3 style={{ marginBottom: 15, fontSize: 19 }}>Tên người dùng</h3>
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
        <FaBookmark
          style={{ fontSize: 20, marginRight: 15, marginTop: 5, marginLeft: 3 }}
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
        <IoLogOut style={{ fontSize: 27, marginRight: 12, marginLeft: 4 }} />
        <p style={{ marginLeft: -3 }}>Đăng xuất</p>
      </div>
    ),
  },
];
