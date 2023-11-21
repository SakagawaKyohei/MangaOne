import React from "react";
import { Col, Flex, Row, Pagination, ConfigProvider } from "antd";
import mangaimage from "D:/MangaOne/src/images/mangaimage.jpg";

//code lại more khi tràn thể loại
//chỉnh sửa đường dẫn tương đối image giữa các file
function Trangchu() {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "FF9040" },
        components: {
          Pagination: {
            itemSize: 50,
          },
        },
      }}
    >
      {/*top manga*/}
      <div style={{ marginLeft: 35, marginRight: 35 }}>
        <p className="title">Xem nhiều nhất</p>
        <Row>
          <Col span={24}>
            <div className="topmanga">
              <div className="topmangadetail">
                <div className="topmangaavt">
                  <img src={mangaimage} className="topmangaavt" />
                </div>
                <div className="topmangainfo">
                  <p className="topmangatitle">TITLE</p>
                  <Flex gap={10} style={{ marginBottom: 10 }}>
                    <div className="buttontheloai">Thể loại</div>
                    <div className="buttontheloai">Thể loại</div>
                    <div className="buttontheloai">Thể loại</div>
                    <div className="buttontheloai">Thể loại</div>
                  </Flex>
                  <div className="noidung">Nội dung</div>
                  <i className="tentacgia">Tên tác giả</i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/*truyen moi cap nhat*/}
        <p className="title">Truyện mới cập nhật</p>
        {/*danh sách truyện*/}
        <Row gutter={16}>
          <Col span={16}>
            <div style={{ backgroundColor: "#999999" }}>
              <Row gutter={[16, 24]}>
                <Col span={6}>
                  <div className="mangaitem">
                    <img className="mangaimage" src={mangaimage} />
                    <div className="chapterandtime">
                      <div className="mangaitemchapter">
                        <p>Chapter 1</p>
                        <p>Chapter 1</p>
                        <p>Chapter 1</p>
                      </div>
                      <div className="mangaitemtime">
                        <p>1 giờ trước</p>
                        <p>1 giờ trước</p>
                        <p>1 giờ trước</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
                <Col span={6}>
                  <div className="mangaitem"></div>
                </Col>
              </Row>
            </div>
            <div className="pagination">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </Col>
          {/*Xếp hạng theo mốc thời gian*/}
          <Col span={8}>
            <div style={{ backgroundColor: "#999999", height: 800 }}></div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default Trangchu;
export {};
