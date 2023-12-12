import { Col, ConfigProvider, Pagination, Row } from "antd";
import React from "react";
import AdvanceSearchCart from "../components/AdvanceSearchCart";
import { Link } from "react-router-dom";

function Timkiemnangcaoresult() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemSize: 50,
          },
        },
      }}
    >
      <div>
        <div style={{ marginLeft: 35, marginRight: 40 }}>
          <p style={{ fontSize: 0.01 }}>.</p>
          <p
            style={{
              fontSize: 30,
              textAlign: "center",
              marginBottom: 20,
              marginTop: 80,
            }}
          >
            Tìm kiếm nâng cao
          </p>
          <Link to="/tim-kiem-nang-cao" style={{ textDecoration: "none" }}>
            <p style={{ color: "#FF4040", paddingBottom: 10, fontSize: 20 }}>
              Nhấn vào đây để tìm với từ khóa khác
            </p>
          </Link>
          <div
            style={{
              width: "100%",
              height: 1,
              background: "#000",
              marginBottom: 20,
            }}
          />
          <div>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
              <Col span={12}>
                <AdvanceSearchCart />
              </Col>
            </Row>
            <div className="pagination">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Timkiemnangcaoresult;
