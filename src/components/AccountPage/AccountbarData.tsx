import path from "path";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { PiBookFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
export const AccountbarData = [
  {
    num: 1,
    title: "Thông tin tài khoản",
    icon: <FaInfoCircle style={{ marginRight: 15, fontSize: 18 }} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    num: 2,
    title: "Truyện theo dõi",
    icon: <FaBookmark style={{ marginRight: 15, fontSize: 18 }} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    num: 3,
    title: "Truyện đã đăng",
    icon: <PiBookFill style={{ marginRight: 15, fontSize: 18 }} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    num: 4,
    title: "Điểm dịch truyện",
    icon: <FaCoins style={{ marginRight: 15, fontSize: 18 }} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    num: 5,
    title: "Đổi mật khẩu",
    icon: <FaLock style={{ marginRight: 15, fontSize: 18 }} />,
    path: "/thong-tin-tai-khoan",
  },
  {
    title: "Đăng xuất",
    icon: (
      <RiLogoutBoxRFill
        style={{
          fontSize: 20,
          marginRight: 15,
          marginBottom: -3,
        }}
      />
    ),
    path: "/thong-tin-tai-khoan",
  },
];
