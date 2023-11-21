import React from "react";
import { Col, Flex, Row, Button } from "antd";

//code lại more khi tràn thể loại
function Trangchu() {
  return (
    /*top manga*/
    <div style={{ marginLeft: 35, marginRight: 35 }}>
      <p className="title">Xem nhiều nhất</p>
      <Row>
        <Col span={24}>
          <div className="topmanga">
            <div className="topmangadetail">
              <div className="topmangaavt" />
              <div className="topmangainfo">
                <p className="topmangatitle">TITLE</p>
                <Flex gap={10} style={{ marginBottom: 10 }}>
                  <div className="buttontheloai">Thể loại</div>
                  <div className="buttontheloai">Thể loại</div>
                  <div className="buttontheloai">Thể loại</div>
                  <div className="buttontheloai">Thể loại</div>
                </Flex>
                <div className="noidung"></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/*truyen moi cap nhat*/}
      <p className="title">Truyện mới cập nhật</p>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <div style={{ backgroundColor: "#999999", height: 800 }}></div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={{ backgroundColor: "#999999", height: 800 }}></div>
        </Col>
      </Row>
    </div>
  );
}

export default Trangchu;
export {};
