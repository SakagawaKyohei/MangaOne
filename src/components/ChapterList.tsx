import { Button, Col, Row } from "antd";
import React from "react";
import { chapters } from "./ChapterInfoData";

function ChapterList() {
  return (
    <div>
      <Row style={{ marginBottom: 10 }}>
        <Col span={10} style={{ fontSize: 18 }}>
          <p style={{ paddingLeft: 5 }}> Số chương</p>
        </Col>
        <Col
          span={8}
          style={{
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Cập nhật
        </Col>
        <Col
          span={4}
          offset={2}
          style={{
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Xem
        </Col>
      </Row>
      <div style={{ border: "1px solid rgba(0, 0, 0, 0.15)" }}>
        <div style={{ marginLeft: 5, marginRight: 10 }}>
          {chapters.map((item, index) => (
            // Sử dụng `key` để đảm bảo mỗi phần tử là duy nhất
            <div>
              <div>
                <Row style={{ marginBottom: 10, marginTop: 10 }}>
                  <Col span={8} style={{ fontSize: 16 }}>
                    <p style={{ paddingLeft: 10 }}>{item.name}</p>
                  </Col>
                  <Col
                    span={12}
                    style={{
                      fontSize: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        marginLeft: 10,
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "rgba(153, 153, 153, 0.60)",
                      }}
                    >
                      {item.time}
                    </p>
                  </Col>
                  <Col
                    span={4}
                    style={{
                      fontSize: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        marginLeft: 20,
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "rgba(153, 153, 153, 0.60)",
                      }}
                    >
                      {item.view}
                    </p>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.20)",
                  height: 1,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              {/*them dash cho line như thiết kế figma*/}
            </div>
          ))}
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 35,
              marginTop: 10,
              marginBottom: 10,
              borderRadius: 0,
              backgroundColor: "#FF9040",
              color: "white",
              width: "100%",
              fontSize: 18,
            }}
          >
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChapterList;
export {};
