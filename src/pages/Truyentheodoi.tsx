import React from "react";
import { Col, Flex, Row, Pagination, ConfigProvider, Button } from "antd";
import MangaCart from "../components/MangaCart/MangaCart";
import star from "/MangaOne/src/images/StarIcon.png";
import TimeManga from "../components/TopTimeManga/TimeManga";
import Top1time from "../components/TopTimeManga/Top1time";
import * as mdIcons from "react-icons/md";
//code lại more khi tràn thể loại
//chỉnh sửa đường dẫn tương đối image giữa các file
//lỗi flex nhiều màn hình image
//chinh top item thanh component
function Truyentheodoi() {
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
      <div
        style={{
          marginLeft: 35,
          marginRight: 35,
        }}
      >
        {/*truyen moi cap nhat*/}
        {/*danh sách truyện*/}
        <Row gutter={16}>
          <Col span={16}>
            <p style={{ fontSize: 0.01 }}>.</p>{" "}
            {/*collision tăng chiều cao cho div*/}
            <p className="title" style={{ marginBottom: 30, marginTop: 90 }}>
              Truyện theo dõi
            </p>
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
            <div className="xemnhieunhattitle" style={{ marginTop: 90 }}>
              <img src={star} height={40} width={40}></img>
              <p style={{ paddingLeft: 10 }}>Xem nhiều nhất</p>
            </div>
            <div>
              {/*Chỉnh lại gap reponsive*/}
              <Flex gap={27}>
                <Button className="timebutton selected">Ngày</Button>
                <Button className="timebutton">Tuần</Button>
                <Button className="timebutton">Tháng</Button>
                <Button className="timebutton">Năm</Button>
              </Flex>
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

export default Truyentheodoi;
export {};
