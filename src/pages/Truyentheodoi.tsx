import React from "react";
import { Col, Flex, Row, Pagination, ConfigProvider, Button } from "antd";
import MangaCart from "../components/MangaCart/MangaCart";
import star from "../images/StarIcon.png";
import TimeManga from "../components/TopTimeManga/TimeManga";
import Top1time from "../components/TopTimeManga/Top1time";
import useGetMangaFollowId from "../hooks/Follow/useMangaFollowId";
import useUser from "../hooks/useUser";
//code lại more khi tràn thể loại
//chỉnh sửa đường dẫn tương đối image giữa các file
//lỗi flex nhiều màn hình image
//chinh top item thanh component
function Truyentheodoi() {
  const user = useUser();
  const mids = useGetMangaFollowId(user.data?.id);

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
            <p
              className="title"
              onClick={() => {
                console.log(mids.data);
              }}
              style={{ marginBottom: 30, marginTop: 90 }}
            >
              Truyện theo dõi
            </p>
            <div style={{ marginTop: 20 }}>
              <Row gutter={[16, 24]}>
                {mids.isSuccess ? (
                  mids.data.map((item) => (
                    <Col span={6} key={item.manga_id}>
                      <MangaCart mangaid={item.manga_id} />
                    </Col>
                  ))
                ) : (
                  <></>
                )}
              </Row>
            </div>
            {/* <div className="pagination">
              <Pagination defaultCurrent={1} total={50} />
            </div> */}
          </Col>
          {/*Xếp hạng theo mốc thời gian*/}
          <Col span={8}>
            <div className="xemnhieunhattitle" style={{ marginTop: 90 }}>
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
              <TimeManga keyy={1} />
              <TimeManga keyy={3} />
              <TimeManga keyy={5} />
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default Truyentheodoi;
export {};
