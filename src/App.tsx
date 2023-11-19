import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chonngaunhien from "./pages/Chonngaunhien";
import Doimaukhau from "./pages/Doimaukhau";
import Lichsudoc from "./pages/LichSu";
import Timkiemnangcao from "./pages/Timkiemnangcao";
import Trangcanhan from "./pages/Trangcanhan";
import TruyenDaDang from "./pages/Truyendadang";
import Truyentheodoi from "./pages/Truyentheodoi";
import Xemnhieunhat from "./pages/Xemnhieunhat";
import Notfound from "./pages/Notfound";
import Diemthuong from "./pages/Diemthuong";
import Trangchu from "./pages/Trangchu";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Trangchu />} />
          <Route path="/chon-ngau-nhien" element={<Chonngaunhien />} />
          <Route path="/doi-mat-kau" element={<Doimaukhau />} />
          <Route path="/lich-su" element={<Lichsudoc />} />
          <Route path="/tim-kiem-nang-cao" element={<Timkiemnangcao />} />
          <Route path="/trang-ca-nhan" element={<Trangcanhan />} />
          <Route path="/truyen-da-dang" element={<TruyenDaDang />} />
          <Route path="/truyen-theo-doi" element={<Truyentheodoi />} />
          <Route path="/xem-nhieu-nhat" element={<Xemnhieunhat />} />
          <Route path="/diem-thuong" element={<Diemthuong />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
