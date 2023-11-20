import React from "react";
import { Col, Row } from "antd";

function Trangchu() {
  return (
    <div style={{ marginLeft: 35, marginRight: 35 }}>
      <p className="title">Xem nhiều nhất</p>
      <Row>
        <Col span={24}>
          <div style={{ backgroundColor: "#999999", height: 350 }}></div>
        </Col>
      </Row>
      <p className="title">Truyện mới cập nhật</p>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <div style={{ backgroundColor: "#999999", height: 800 }}></div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={{ backgroundColor: "#999999", height: 800 }}></div>
        </Col>
      </Row>
    </div>
  );
}

export default Trangchu;
export {};
