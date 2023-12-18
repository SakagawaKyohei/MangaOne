import { Button, Checkbox, Col, ConfigProvider, Flex, Input, Row } from "antd";
import { InputThemMoiTruyen, InputThemMoiChuong } from "./InputData";
import QLTComponent from "../QuanLyTruyen/QLTComponent";
import QLCComponent from "../QuanLyTruyen/QLCComponent";
import { Link } from "react-router-dom";

const style: React.CSSProperties = {
  marginTop: 3,
  marginRight: 20,
  fontSize: 16,
  display: "flex",
  flexDirection: "row",
};

export const ThemMoiTruyenData = {
  label: (
    <div style={{ width: "92%" }}>
      <InputThemMoiTruyen />
    </div>
  ),
  title: "THÊM MỚI TRUYỆN",
  title1: "Thêm mới truyện",
};

export const ThemMoiChapterData = {
  label: (
    <div style={{ width: "92%" }}>
      {InputThemMoiChuong.map((items, index) => (
        <div
          style={{
            marginTop: 25,
            marginBottom: 25,
          }}
        >
          <Row>
            <Col
              span={6}
              style={{
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
              }}
            >
              <div style={style}>
                <p style={{ fontSize: 16 }}>{items.title}</p>
                {items.batbuoc ? (
                  <p style={{ color: "red", marginLeft: 5 }}>*</p>
                ) : (
                  <p></p>
                )}
              </div>
            </Col>
            <Col span={18}>{items.label}</Col>
          </Row>
        </div>
      ))}
    </div>
  ),
  title: "THÊM MỚI CHƯƠNG",
  title1: "Tên truyện - Thêm mới chương",
};

export const TruyenDaDangData = {
  label: (
    <div style={{ width: "92%" }}>
      <Row style={{ paddingTop: 25, paddingBottom: 25 }}>
        <Col offset={10} span={10}>
          <Input
            placeholder="Nhập từ khóa"
            style={{
              borderRadius: 5,
              width: "100%",
              height: 32,
              fontSize: 15,
            }}
          />
        </Col>
        <Col offset={1} span={3}>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              backgroundColor: "#FF9040",
              color: "white",
              fontSize: 15,
              height: 32,
              width: "100%",
            }}
          >
            <p>Tìm kiếm</p>
          </Button>
        </Col>
      </Row>
      <div className="khung" style={{ marginLeft: "8%", height: "50vh" }}>
        <div style={{ marginLeft: 20, margin: 5, fontSize: 15 }}>
          <Row style={{ marginBottom: 10, marginTop: 10 }}>
            <Col span={5}>
              <Checkbox style={{ marginLeft: 10 }}>
                <p style={{ fontSize: 15 }}>Tên truyện</p>
              </Checkbox>
            </Col>
            <Col
              span={3}
              offset={6}
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Số chương
              </p>
            </Col>
            <Col
              span={3}
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              <p> Người đăng</p>
            </Col>
            <Col
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ paddingLeft: 10, fontSize: 15 }}>Số lượt xem</div>
            </Col>
          </Row>
          <QLTComponent
            tentruyen={"Conan"}
            sochuong={3}
            nguoidang={"Kyohei"}
            soluotxem={1000}
            manga={false}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Link to={"/them-moi-truyen"}>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              backgroundColor: "#FF9040",
              color: "white",
              fontSize: 15,
              height: 32,
              marginBottom: 25,
              marginTop: 25,
              marginRight: 20,
            }}
          >
            <p>Thêm truyện</p>
          </Button>
        </Link>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "red",
            color: "white",
            height: 32,
            fontSize: 15,
            marginBottom: 25,
            marginTop: 25,
          }}
        >
          <p>Xóa truyện</p>
        </Button>
      </div>
    </div>
  ),
  title: "TRUYỆN ĐÃ ĐĂNG",
  title1: "Danh sách truyện đã đăng",
};

export const ChapterDaDangData = {
  label: (
    <div style={{ width: "92%" }}>
      <Row style={{ paddingTop: 25, paddingBottom: 25 }}>
        <Col offset={10} span={10}>
          <Input
            placeholder="Nhập từ khóa"
            style={{
              borderRadius: 5,
              width: "100%",
              height: 32,
              fontSize: 15,
            }}
          />
        </Col>
        <Col offset={1} span={3}>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              backgroundColor: "#FF9040",
              color: "white",
              fontSize: 15,
              height: 32,
              width: "100%",
            }}
          >
            <p>Tìm kiếm</p>
          </Button>
        </Col>
      </Row>
      <div className="khung" style={{ marginLeft: "8%", height: "50vh" }}>
        <div style={{ marginLeft: 20, margin: 5, fontSize: 16 }}>
          <Row style={{ marginBottom: 10, marginTop: 10 }}>
            <Col span={5}>
              <Checkbox style={{ marginLeft: 10, fontSize: 16 }}>
                Tên chương
              </Checkbox>
            </Col>
            <Col
              span={3}
              offset={6}
              style={{
                fontSize: 16,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            ></Col>
            <Col
              span={3}
              style={{
                fontSize: 16,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            >
              Người đăng
            </Col>
            <Col
              style={{
                fontSize: 16,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ paddingLeft: 10 }}>Số lượt xem</div>
            </Col>
          </Row>
          <QLCComponent
            tentruyen={"Chapter 1"}
            sochuong={3}
            nguoidang={"Kyohei"}
            soluotxem={1000}
            manga={false}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "#FF9040",
            color: "white",
            fontSize: 16,
            height: 38,
            marginBottom: 25,
            marginTop: 25,
            marginRight: 20,
          }}
        >
          <p>Thêm chương</p>
        </Button>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "red",
            color: "white",
            fontSize: 16,
            height: 38,
            marginBottom: 25,
            marginTop: 25,
          }}
        >
          <p>Xóa chương</p>
        </Button>
      </div>
    </div>
  ),
  title: "QUẢN LÝ CHƯƠNG",
  title1: "Tên truyện - Quản lý chương",
};
