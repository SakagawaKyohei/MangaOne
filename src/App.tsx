import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import Login from "./pages/LoginSystem/Login";
import TruyenTheoDoi2 from "./pages/TruyenTheoDoi2";
import { QueryClient, QueryClientProvider } from "react-query";
import DangKy from "./pages/LoginSystem/DangKy";
import QuenMatKhau from "./pages/LoginSystem/QuenMatKhau";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./pages/AdminPage";
import ResetPassword from "./pages/LoginSystem/ResetPassword";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

//sau khi code xong component chinh lai font, router

function App() {
  const [user, setUser] = useState();

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              hoverBorderColor: "#FF9040",
              activeBorderColor: "#FF9040",
            },
            Select: {
              /* here is your component tokens */ borderRadius: 0,
              fontSize: 12,
            },
          },
          token: {
            colorPrimary: "#FF9040",
            fontFamily: "Arial, Helvetica, sans-seri",
            fontSize: 14,
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
              <Route path="/truyen-da-dang" element={<TruyenDaDang />} />
              <Route path="/them-moi-truyen" element={<ThemMoiTruyen />} />
              <Route path="/truyen-theo-doi" element={<Truyentheodoi />} />
              <Route path="/xem-nhieu-nhat" element={<Xemnhieunhat />} />
              <Route path="/diem-dich-truyen" element={<Diemthuong />} />
              <Route path="/*" element={<Notfound />} />
              <Route path="/dang-nhap" element={<Login />} />
              <Route path="/truyen-theo-doi-2" element={<TruyenTheoDoi2 />} />
              <Route path="/noi-dung" element={<NoiDungTruyen />} />
              <Route path="/dang-ky" element={<DangKy />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/noi-dung" element={<NoiDungTruyen />} />
              <Route path="/quen-mat-khau" element={<QuenMatKhau />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
