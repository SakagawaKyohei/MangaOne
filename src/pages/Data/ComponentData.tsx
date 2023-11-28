import { Col, Row } from "antd";
import { InputThemMoiTruyen } from "./InputData";

const style: React.CSSProperties = {
  marginTop: 3,
  marginRight: 20,
  fontSize: 18,
  display: "flex",
  flexDirection: "row",
};

export const ThemMoiTruyenData = {
  label: (
    <div style={{ height: 600, width: "92%" }}>
      {InputThemMoiTruyen.map((items, index) => (
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
                {items.title}
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
  title: "THÊM MỚI TRUYỆN",
  title1: "Thêm mới truyện",
};
