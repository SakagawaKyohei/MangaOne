import React from "react";
import { Col, Flex, Row, Pagination, ConfigProvider, Button } from "antd";
import mangaimage from "/MangaOne/src/images/mangaimage.jpg";
import MangaCart from "../components/MangaCart/MangaCart";
import star from "/MangaOne/src/images/StarIcon.png";
import TimeManga from "../components/TopTimeManga/TimeManga";
import Top1time from "../components/TopTimeManga/Top1time";
import * as mdIcons from "react-icons/md";
//code lại more khi tràn thể loại
//chỉnh sửa đường dẫn tương đối image giữa các file
//lỗi flex nhiều màn hình image
//chinh top item thanh component
//chuyen danh sach truyen vs top time sang component
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
      <div
        style={{
          marginLeft: 35,
          marginRight: 35,
        }}
      >
        <p style={{ fontSize: 0.01 }}>.</p>{" "}
        {/*collision tăng chiều cao cho div*/}
        <p className="title" style={{ marginBottom: 30, marginTop: 90 }}>
          Xem nhiều nhất
        </p>
        <Row>
          <Col span={24}>
            <div className="topmanga">
              <div className="topmangabg" />
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
                  <div className="tacgiavschuyehuong">
                    <div style={{ width: "50%" }}>
                      <i className="tentacgia">Tên tác giả</i>
                    </div>
                    <div className="chuyenhuong">
                      <i className="no">No.1</i>
                      <mdIcons.MdArrowBackIos
                        fontSize={25}
                        style={{ marginTop: 5, marginRight: 30 }}
                      />
                      <mdIcons.MdArrowForwardIos
                        fontSize={25}
                        style={{ marginTop: 5, marginRight: 10 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/*truyen moi cap nhat*/}
        {/*danh sách truyện*/}
        <Row gutter={16}>
          <Col span={16}>
            <div>
              <p className="title">Truyện mới cập nhật</p>
            </div>
            <div style={{ marginTop: 20 }}>
              <Row gutter={[16, 24]}>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
                <Col span={6}>
                  <MangaCart />
                </Col>
              </Row>
            </div>
            <div className="pagination">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </Col>
          {/*Xếp hạng theo mốc thời gian*/}
          <Col span={8}>
            <div className="xemnhieunhattitle" style={{ paddingTop: 30 }}>
              <img src={star} height={40} width={40}></img>
              <p style={{ paddingLeft: 10 }}>Xem nhiều nhất</p>
            </div>
            <div>
              <Row gutter={18}>
                <Col span={6}>
                  <Button className="timebutton selected">Ngày</Button>
                </Col>
                <Col span={6}>
                  <Button className="timebutton">Tuần</Button>
                </Col>
                <Col span={6}>
                  <Button className="timebutton">Tháng</Button>
                </Col>
                <Col span={6}>
                  <Button className="timebutton">Năm</Button>
                </Col>
              </Row>
              <Top1time />
              <TimeManga />
              <TimeManga />
              <TimeManga />
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default Trangchu;
export {};
