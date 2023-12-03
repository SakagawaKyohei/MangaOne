import path from "path";
import React from "react";
import * as FaIcons from "react-icons/fa";
const style: React.CSSProperties = {
  marginRight: 15,
  fontSize: 18,
};
export const AccountbarData = [
  {
    num: 1,
    title: "Thông tin tài khoản",
    icon: <FaIcons.FaInfoCircle style={style} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    num: 2,
    title: "Truyện theo dõi",
    icon: <FaIcons.FaBookmar style={style} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    num: 3,
    title: "Truyện đã đăng",
    icon: <FaIcons.FaBook style={style} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    num: 4,
    title: "Điểm dịch truyện",
    icon: <FaIcons.FaCoins style={style} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    num: 5,
    title: "Đổi mật khẩu",
    icon: <FaIcons.FaLock style={style} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    title: "Đăng xuất",
    icon: <FaIcons.FaSignOutAlt style={style} />,
    path: "/thong-tin-tai-khoan",
  },
];
