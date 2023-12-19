import { Checkbox, Col, Row } from "antd";
import React, { useState } from "react";
import capnhat from "../../images/CapNhat.svg";
interface Pros {
  tentruyen: string;
  nguoidang: string;
  soluotxem: number;
  manga: boolean;
}

function QLCComponent(pros: Pros) {
  return (
    <div style={{ backgroundColor: "rgba(217, 217, 217, 0.20)" }}>
      <Row
        style={{
          backgroundColor: "rgba(217, 217, 217, 0.20)",
          height: 40,
          display: "flex",
          alignItems: "center",
          fontSize: 16,
        }}
      >
        <Col span={5}>
          <Checkbox style={{ marginLeft: 10, fontSize: 16 }}>
            {pros.tentruyen}
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
          {pros.nguoidang}
        </Col>
        <Col span={3}>
          <div
            style={{
              paddingLeft: 10,
              fontSize: 16,
              padding: 0.001,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {pros.soluotxem}
          </div>
        </Col>
        <Col span={4} style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <img src={capnhat} style={{ height: 18 }} />
        </Col>
      </Row>
    </div>
  );
}

export default QLCComponent;
export {};
