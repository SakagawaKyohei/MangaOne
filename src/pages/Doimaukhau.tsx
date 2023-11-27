import React from "react";
import AccountPage from "../components/AccountPage/AccountPage";
import { Col, Row } from "antd";

function Doimaukhau() {
  return (
    <div>
      <p style={{ fontSize: 0.01 }}>.</p>
      <div style={{ marginBottom: 30, marginTop: 80 }}>
        <Row>
          <Col span={6}>
            <AccountPage />
          </Col>
          <Col span={18} style={{ backgroundColor: "blue" }}>
            <p>a</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Doimaukhau;
export {};
