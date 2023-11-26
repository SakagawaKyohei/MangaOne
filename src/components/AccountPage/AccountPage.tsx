import { Col, Row } from "antd";
import { FaInfoCircle } from "react-icons/fa";
import React, { useState } from "react";
import "./AccountPage.css";
import { AccountbarData } from "./AccountbarData";

function AccountPage() {
  const handleclick = (i: number) => {
    seti(i);
  };
  const [i, seti] = useState(0);
  return (
    <div style={{ marginBottom: 30, marginTop: 90 }}>
      <Row>
        <Col span={6}>
          {AccountbarData.map((item, index) => (
            <div
              className={index == i ? "navbutton seleted" : "navbutton"}
              onClick={() => handleclick(index)}
            >
              <div style={{ marginLeft: "25%" }}>
                {item.icon}
                {item.title}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default AccountPage;
export {};
