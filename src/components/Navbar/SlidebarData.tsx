import React from "react";
import * as FaUIcons from "react-icons/fa";
import * as IoUIcons from "react-icons/io";

export const SlidebarData = [
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
    path: "/noi-dung",
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
