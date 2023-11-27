import React from "react";
import AccountPage from "../../components/AccountPage/AccountPage";
import { Row, Col, Input, ConfigProvider, Button } from "antd";
import { InputData } from "./InputData";

function TruyenDaDang() {
  const style: React.CSSProperties = {
    marginTop: 3,
    marginRight: 20,
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            hoverBorderColor: "#FF9040",
            activeBorderColor: "#FF9040",
          },
        },
      }}
    >
      <div style={{ marginRight: 20 }}>
        <p style={{ fontSize: 0.01 }}>.</p>
        <div style={{ marginBottom: 30, marginTop: 80 }}>
          <Row>
            <Col span={6}>
              <AccountPage />
            </Col>
            <Col span={17} offset={1}>
              <h1
                style={{ textAlign: "center", marginTop: 10, marginBottom: 20 }}
              >
                Thêm mới truyện
              </h1>
              <div className="khung">
                <p style={{ fontSize: 18, padding: 15 }}>THÊM MỚI TRUYỆN</p>
                <div
                  style={{
                    width: "100%",
                    height: 3,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <div style={{ height: 600, width: "92%" }}>
                  {InputData.map((items, index) => (
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
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default TruyenDaDang;
export {};
