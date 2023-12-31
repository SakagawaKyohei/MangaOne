import React from "react";
import AccountPage from "../components/AccountPage/AccountPage";
import { Col, Form, Row } from "antd";
import { InputChangePass } from "./Data/InputData";
import useUser from "../hooks/useUser";
import NeedLogin from "./NeedLogin";

function Doimaukhau() {
  const style2: React.CSSProperties = {
    marginBottom: 12,
    marginRight: 20,
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
  };
  const user = useUser();
  if (user.data == null) {
    return <NeedLogin />;
  }
  return (
    <div>
      <p style={{ fontSize: 0.01 }}>.</p>
      <div style={{ marginBottom: 30, marginTop: 80 }}>
        <Row>
          <Col span={6}>
            <AccountPage i={4} />
          </Col>
          <Col span={17} offset={1}>
            <h1
              style={{
                textAlign: "center",
                marginTop: 10,
                marginBottom: 20,
                fontSize: 23,
              }}
            >
              ĐỔI MẬT KHẨU
            </h1>
            <div
              style={{
                marginTop: 25,
                marginBottom: 25,
                marginRight: 35,
              }}
            >
              <div>
                <Form>
                  <div>
                    <InputChangePass />
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

export default Doimaukhau;
export {};
