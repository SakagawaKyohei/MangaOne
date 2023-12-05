import React from "react";
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
import Login from "./pages/Login/Login";
import Timkiemnangcaoresult from "./pages/Timkiemnangcaoresult";

//sau khi code xong component chinh lai font, router

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF9040",
        },
      }}
    >
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Trangchu />} />
            <Route path="/chon-ngau-nhien" element={<Chonngaunhien />} />
            <Route path="/doi-mat-khau" element={<Doimaukhau />} />
            <Route path="/lich-su" element={<Lichsudoc />} />
            <Route path="/tim-kiem-nang-cao" element={<Timkiemnangcao />} />
            <Route path="/ket-qua" element={<Timkiemnangcaoresult />} />
            <Route path="/trang-ca-nhan" element={<Trangcanhan />} />
            <Route path="/truyen-da-dang" element={<ThemMoiTruyen />} />
            <Route path="/truyen-theo-doi" element={<Truyentheodoi />} />
            <Route path="/xem-nhieu-nhat" element={<Xemnhieunhat />} />
            <Route path="/diem-thuong" element={<Diemthuong />} />
            <Route path="/*" element={<Notfound />} />
            <Route path="/dang-nhap" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
