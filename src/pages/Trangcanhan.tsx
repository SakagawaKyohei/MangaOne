import React, { useRef, useState } from "react";
import AccountPage from "../components/AccountPage/AccountPage";
import { Col, ConfigProvider, Form, Input, Row } from "antd";
import { InputInfo } from "./Data/InputData";
import useUser from "../hooks/useUser";
import NeedLogin from "./NeedLogin";

function Trangcanhan() {
  const user = useUser();

  if (user.data == null) {
    return <NeedLogin />;
  }

  {
    /*nghien cuu cach crop cho hop vi tri sau*/
  }

  return (
    <div>
      <p style={{ fontSize: 0.01 }}>.</p>
      <div style={{ marginBottom: 30, marginTop: 80 }}>
        <Row>
          <Col span={6}>
            <AccountPage i={0} />
          </Col>
          <Col span={17} offset={1}>
            <h1
              style={{
                textAlign: "center",
                marginTop: 10,
                marginBottom: 20,
                fontSize: 21,
              }}
            >
              THÔNG TIN TÀI KHOẢN
            </h1>
            <div
              style={{
                marginTop: 25,
                marginBottom: 25,
                marginRight: 30,
              }}
            >
              <div>
                <Form>
                  <div>
                    <InputInfo />
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Trangcanhan;
export {};
