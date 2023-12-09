import React from "react";
import AccountPage from "../components/AccountPage/AccountPage";
import { Col, ConfigProvider, Form, Input, Row } from "antd";
import chualogin from "../images/Chualogin.svg";
import { InputInfo } from "./Data/InputData";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function Trangcanhan() {
  const style: React.CSSProperties = {
    fontSize: 16,
    paddingBottom: 10,
  };

  const style2: React.CSSProperties = {
    marginBottom: 12,
    marginRight: 20,
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div>
      <Navbar />
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
              <div style={style}>Ảnh đại diện</div>
              <div className="center">
                <img src={chualogin} style={{ height: 80, marginBottom: 30 }} />
              </div>
              <div>
                <Form>
                  <div>
                    {InputInfo.map((items, index) => (
                      <div
                        style={{
                          marginBottom: 20,
                        }}
                      >
                        <Row>
                          <Col span={24}>
                            <div style={style2}>
                              {items.title}
                              {items.batbuoc ? (
                                <p style={{ color: "red", marginLeft: 5 }}>*</p>
                              ) : (
                                <p></p>
                              )}
                            </div>
                          </Col>
                          <Col span={24}>{items.label}</Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Trangcanhan;
export {};
