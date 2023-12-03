import { Checkbox, Col, Row } from "antd";
import React from "react";
import capnhat from "/mangaone/src/images/CapNhat.svg";
import danhsach from "/mangaone/src/images/DanhSach.svg";
interface Pros {
  tentruyen: string;
  sochuong: number;
  nguoidang: string;
  soluotxem: number;
  manga: boolean;
}

function QLTComponent(pros: Pros) {
  return (
    <div style={{ backgroundColor: "rgba(217, 217, 217, 0.20)" }}>
      <Row
        style={{
          backgroundColor: "rgba(217, 217, 217, 0.20)",
          height: 40,
          display: "flex",
          alignItems: "center",
          fontSize: 20,
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
        >
          {pros.sochuong}
        </Col>
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
        <Col span={4}>
          {" "}
          <img src={capnhat} style={{ marginLeft: 35, height: 18 }} />
          <img
            src={danhsach}
            style={{ marginLeft: 20, height: 18, width: 18 }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default QLTComponent;
export {};
