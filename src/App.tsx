import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chonngaunhien from "./pages/Chonngaunhien";
import Doimaukhau from "./pages/Doimaukhau";
import Lichsudoc from "./pages/LichSu";
import Timkiemnangcao from "./pages/Timkiemnangcao";
import Trangcanhan from "./pages/Trangcanhan";
import TruyenDaDang from "./pages/QuanLyTruyen/TruyenDaDang";
import Truyentheodoi from "./pages/Truyentheodoi";
import Xemnhieunhat from "./pages/Xemnhieunhat";
import Notfound from "./pages/Notfound";
import Diemthuong from "./pages/Diemthuong";
import Trangchu from "./pages/Trangchu";
import Footer from "./components/Footer/footer";
import ThemMoiTruyen from "./pages/QuanLyTruyen/ThemMoiTruyen";
import ThemMoiChapter from "./pages/QuanLyTruyen/ThemMoiChapter";
import ChapterDaDang from "./pages/QuanLyTruyen/ChapterDaDang";
import { ConfigProvider } from "antd";
import Timkiemnangcaoresult from "./pages/Timkiemnangcaoresult";
import NoiDungTruyen from "./pages/NoiDungTruyen";
import Login from "./pages/Login";
import TruyenTheoDoi2 from "./pages/TruyenTheoDoi2";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

//sau khi code xong component chinh lai font, router

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FF9040",
          },
        }}
      >
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Trangchu />} />
              <Route path="/chon-ngau-nhien" element={<Chonngaunhien />} />
              <Route path="/doi-mat-khau" element={<Doimaukhau />} />
              <Route path="/lich-su" element={<Lichsudoc />} />
              <Route path="/tim-kiem-nang-cao" element={<Timkiemnangcao />} />
              <Route path="/ket-qua" element={<Timkiemnangcaoresult />} />
              <Route path="/trang-ca-nhan" element={<Trangcanhan />} />
              <Route path="/truyen-da-dang" element={<TruyenDaDang />} />
              <Route path="/truyen-theo-doi" element={<Truyentheodoi />} />
              <Route path="/xem-nhieu-nhat" element={<Xemnhieunhat />} />
              <Route path="/diem-dich-truyen" element={<Diemthuong />} />
              <Route path="/*" element={<Notfound />} />
              <Route path="/dang-nhap" element={<Login />} />
              <Route path="/truyen-theo-doi-2" element={<TruyenTheoDoi2 />} />
              <Route path="/noi-dung" element={<NoiDungTruyen />} />
            </Routes>
          </Router>
        </div>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
