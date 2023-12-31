import React, { useEffect, useState } from "react";
import { Col, Flex, Row, Pagination, ConfigProvider, Button } from "antd";
import mangaimage from "../images/mangaimage.jpg";
import MangaCart from "../components/MangaCart/MangaCart";
import star from "../images/StarIcon.png";
import TimeManga from "../components/TopTimeManga/TimeManga";
import Top1time from "../components/TopTimeManga/Top1time";
import * as mdIcons from "react-icons/md";
import useGetMangaList from "../hooks/GetMangaInfo/useGetMangaList";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGetMangaTop from "../hooks/useGetTopManga";
import useGetChapter from "../hooks/GetMangaInfo/useGetChapter";
//code lại more khi tràn thể loại
//chỉnh sửa đường dẫn tương đối image giữa các file
//lỗi flex nhiều màn hình image
//chinh top item thanh component
//chuyen danh sach truyen vs top time sang component
function Trangchu() {
  const navigate = useNavigate();
  const [pages, setpages] = useState<number>(1);
  const { page } = useParams();
  //top 1 truyen
  const top1 = useGetMangaTop(0);
  let ten = "";
  let avt = "";
  let id = "";
  let detail = "";
  let theloai = ["a", "b"];
  let author = "";
  if (top1.isSuccess) {
    ten = top1.data.name;
    avt = top1.data.biatruyen;
    id = top1.data.id;
    detail = top1.data.detail;
    theloai = top1.data.genre;
    author = top1.data.author;
  }
  if (top1.isError) {
    console.log((top1.error as any).message);
  }

  //

  useEffect(() => {
    if (page == undefined) {
      setpages(1);
    } else {
      setpages(Number(page));
    }
  }, [page]);

  const manga = useGetMangaList(pages);

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
            <Link to={`/noi-dung/${id}`} style={{ color: "black" }}>
              <div className="topmanga">
                <div className="topmangabg" />
                <div className="topmangadetail">
                  <div className="topmangaavt">
                    <img src={avt} className="topmangaavt" />
                  </div>
                  <div className="topmangainfo">
                    <p className="topmangatitle">{ten}</p>
                    <Flex gap={10} style={{ marginBottom: 10 }}>
                      {theloai.map((item) => (
                        <div className="buttontheloai">
                          {item.toUpperCase()}
                        </div>
                      ))}
                    </Flex>
                    <div className="noidung" style={{ fontSize: 18 }}>
                      {detail}
                    </div>
                    <div className="tacgiavschuyehuong">
                      <div style={{ width: "50%" }}>
                        <i className="tentacgia">{author}</i>
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
            </Link>
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
                {manga.data?.pagemanga.map((item) => (
                  <Col span={6}>
                    <MangaCart mangaid={item.id} />
                  </Col>
                ))}
              </Row>
            </div>
            <div className="pagination">
              <Pagination
                total={manga.data?.allmanga.length}
                pageSize={12}
                showSizeChanger={false}
                showLessItems
                current={pages}
                onChange={(e) => {
                  navigate(("/" + e) as string);
                  setpages(e);
                  console.log(manga.data?.pagemanga);
                }}
              />
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

export default Trangchu;
export {};
