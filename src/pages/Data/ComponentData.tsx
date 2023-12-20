import { Button, Checkbox, Col, ConfigProvider, Flex, Input, Row } from "antd";
import { InputThemMoiTruyen, InputThemMoiChuong } from "./InputData";
import QLTComponent from "../QuanLyTruyen/QLTComponent";
import QLCComponent from "../QuanLyTruyen/QLCComponent";
import { Link } from "react-router-dom";
import { useState } from "react";
import useGetMangaTrans from "../../hooks/GetMangaInfo/useGetMangaTrans";
import useUser from "../../hooks/useUser";
import useDeleteManga from "../../hooks/MangaManagement/useDeleteManga";
import { error } from "console";

const style: React.CSSProperties = {
  marginTop: 3,
  marginRight: 20,
  fontSize: 16,
  display: "flex",
  flexDirection: "row",
};

export const ThemMoiTruyenData = {
  label: (
    <div style={{ width: "92%" }}>
      <InputThemMoiTruyen />
    </div>
  ),
  title: "THÊM MỚI TRUYỆN",
  title1: "Thêm mới truyện",
};

export const ThemMoiChapterData = {
  label: (
    <div style={{ width: "92%" }}>
      {InputThemMoiChuong.map((items, index) => (
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
                <p style={{ fontSize: 16 }}>{items.title}</p>
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
  ),
  title: "THÊM MỚI CHƯƠNG",
  title1: "Tên truyện - Thêm mới chương",
};

//tất cả thành phần của truyện đã đăng bao gồm cả danh sách truyện đã đăng và khung và search bar
export function TruyenDaDangData() {
  const user = useUser();
  const manga = useGetMangaTrans(user.data?.id as string);
  const [mangaid, setmangaid] = useState<string[]>([]); //id manga duoc chon de delete
  const addValue = (value: string) => {
    // Thêm giá trị vào mảng
    setmangaid((prevArray) => [...prevArray, value]);
  };

  const removeValue = (value: string) => {
    // Xóa giá trị khỏi mảng
    setmangaid((prevArray) => prevArray.filter((item) => item !== value));
  };
  const deletemanga = useDeleteManga(mangaid);
  if (deletemanga.isError) {
    console.log((deletemanga.error as any).message);
  }
  if (deletemanga.isSuccess) {
    window.location.reload(); //tìm cách mỗi lần thay đổi data trong database là load chứ không cần ra lệnh reload
  }

  const [checkall, setcheckall] = useState(false);
  const [search, setsearch] = useState("");
  const [search1, setsearch1] = useState(""); //khi bấm tìm kiếm mới xử lý search
  return (
    <div style={{ width: "92%" }}>
      <Row style={{ paddingTop: 25, paddingBottom: 25 }}>
        <Col offset={10} span={10}>
          <Input
            placeholder="Nhập tên truyện"
            style={{
              borderRadius: 5,
              width: "100%",
              height: 32,
              fontSize: 15,
            }}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </Col>
        <Col offset={1} span={3}>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              backgroundColor: "#FF9040",
              color: "white",
              fontSize: 15,
              height: 32,
              width: "100%",
            }}
            onClick={() => {
              setsearch1(search);
              console.log(mangaid);
            }}
          >
            <p>Tìm kiếm</p>
          </Button>
        </Col>
      </Row>
      <div
        className="khung2"
        style={{
          marginLeft: "8%",
          height: "50vh",
          overflow: "hidden",
          overflowY: "auto",
        }}
      >
        <div style={{ marginLeft: 20, margin: 5, fontSize: 15 }}>
          <Row style={{ marginBottom: 10, marginTop: 10 }}>
            <Col span={5}>
              <Checkbox
                style={{ marginLeft: 10 }}
                onChange={(e) => {
                  setcheckall(!checkall);
                  if (e.target.checked) {
                    {
                      manga.data
                        ?.filter((item) => {
                          return search1.toLowerCase() == ""
                            ? item
                            : item.name.toLowerCase().includes(search1);
                        })
                        .map((item, index) => removeValue(item.id)); //xóa tất cả id đang được chọn và chọn tất cả
                      manga.data
                        ?.filter((item) => {
                          return search1.toLowerCase() == ""
                            ? item
                            : item.name.toLowerCase().includes(search1);
                        })
                        .map((item, index) => addValue(item.id));
                    }
                  } else {
                    {
                      manga.data
                        ?.filter((item) => {
                          return search1.toLowerCase() == ""
                            ? item
                            : item.name.toLowerCase().includes(search1);
                        })
                        .map((item, index) => removeValue(item.id));
                    }
                  }
                }}
              >
                <p style={{ fontSize: 15 }}>Tên truyện</p>
              </Checkbox>
            </Col>
            <Col
              span={3}
              offset={6}
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Số chương
              </p>
            </Col>
            <Col
              span={3}
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              <p> Người đăng</p>
            </Col>
            <Col
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ paddingLeft: 10, fontSize: 15 }}>Số lượt xem</div>
            </Col>
          </Row>
          {manga.data
            ?.filter((item) => {
              return search1.toLowerCase() == ""
                ? item
                : item.name.toLowerCase().includes(search1);
            })
            .map((item, index) => (
              <>
                <QLTComponent
                  tentruyen={item.name}
                  mangaid={item.id}
                  nguoidang={user.data?.user_metadata.ten}
                  soluotxem={1000}
                  checkall={checkall}
                  keyy={index.toString()}
                  setmangaid={setmangaid}
                />
              </>
            ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Link to={"/them-moi-truyen"}>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              backgroundColor: "#FF9040",
              color: "white",
              fontSize: 15,
              height: 32,
              marginBottom: 25,
              marginTop: 25,
              marginRight: 20,
            }}
          >
            <p>Thêm truyện</p>
          </Button>
        </Link>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "red",
            color: "white",
            height: 32,
            fontSize: 15,
            marginBottom: 25,
            marginTop: 25,
          }}
          onClick={() => deletemanga.mutate()}
        >
          <p>Xóa truyện</p>
        </Button>
      </div>
    </div>
  );
}

export function ChapterDaDangData() {
  const user = useUser();
  const manga = useGetMangaTrans(user.data?.id as string);
  const [mangaid, setmangaid] = useState<string[]>([]); //id manga duoc chon de delete
  const addValue = (value: string) => {
    // Thêm giá trị vào mảng
    setmangaid((prevArray) => [...prevArray, value]);
  };

  const removeValue = (value: string) => {
    // Xóa giá trị khỏi mảng
    setmangaid((prevArray) => prevArray.filter((item) => item !== value));
  };
  const deletemanga = useDeleteManga(mangaid);
  if (deletemanga.isError) {
    console.log((deletemanga.error as any).message);
  }
  if (deletemanga.isSuccess) {
    window.location.reload(); //tìm cách mỗi lần thay đổi data trong database là load chứ không cần ra lệnh reload
  }

  const [checkall, setcheckall] = useState(false);
  const [search, setsearch] = useState("");
  const [search1, setsearch1] = useState(""); //khi bấm tìm kiếm mới xử lý search
  return (
    <div style={{ width: "92%" }}>
      <Row style={{ paddingTop: 25, paddingBottom: 25 }}>
        <Col offset={10} span={10}>
          <Input
            placeholder="Nhập tên chương"
            style={{
              borderRadius: 5,
              width: "100%",
              height: 32,
              fontSize: 15,
            }}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </Col>
        <Col offset={1} span={3}>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              backgroundColor: "#FF9040",
              color: "white",
              fontSize: 15,
              height: 32,
              width: "100%",
            }}
            onClick={() => {
              setsearch1(search);
              console.log(mangaid);
            }}
          >
            <p>Tìm kiếm</p>
          </Button>
        </Col>
      </Row>
      <div
        className="khung2"
        style={{
          marginLeft: "8%",
          height: "50vh",

          overflow: "hidden",
          overflowY: "auto",
        }}
      >
        <div style={{ marginLeft: 20, margin: 5, fontSize: 15 }}>
          <Row style={{ marginBottom: 10, marginTop: 10 }}>
            <Col span={5}>
              <Checkbox
                style={{ marginLeft: 10 }}
                onChange={(e) => {
                  setcheckall(!checkall);
                  if (e.target.checked) {
                    {
                      manga.data
                        ?.filter((item) => {
                          return search1.toLowerCase() == ""
                            ? item
                            : item.name.toLowerCase().includes(search1);
                        })
                        .map((item, index) => removeValue(item.id)); //xóa tất cả id đang được chọn và chọn tất cả
                      manga.data
                        ?.filter((item) => {
                          return search1.toLowerCase() == ""
                            ? item
                            : item.name.toLowerCase().includes(search1);
                        })
                        .map((item, index) => addValue(item.id));
                    }
                  } else {
                    {
                      manga.data
                        ?.filter((item) => {
                          return search1.toLowerCase() == ""
                            ? item
                            : item.name.toLowerCase().includes(search1);
                        })
                        .map((item, index) => removeValue(item.id));
                    }
                  }
                }}
              >
                <p style={{ fontSize: 15 }}>Tên chương</p>
              </Checkbox>
            </Col>
            <Col
              span={3}
              offset={5}
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}></p>
            </Col>
            <Col
              span={3}
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              <p> Người đăng</p>
            </Col>
            <Col
              offset={1}
              style={{
                fontSize: 15,
                padding: 0.001,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ paddingLeft: 10, fontSize: 15 }}>Số lượt xem</div>
            </Col>
          </Row>
          {manga.data
            ?.filter((item) => {
              return search1.toLowerCase() == ""
                ? item
                : item.name.toLowerCase().includes(search1);
            })
            .map((item, index) => (
              <>
                <QLCComponent
                  tentruyen={item.name}
                  mangaid={item.id}
                  nguoidang={user.data?.user_metadata.ten}
                  soluotxem={1000}
                  checkall={checkall}
                  keyy={index.toString()}
                  setmangaid={setmangaid}
                />
              </>
            ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Link to={"/them-moi-truyen"}>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 0,
              backgroundColor: "#FF9040",
              color: "white",
              fontSize: 15,
              height: 32,
              marginBottom: 25,
              marginTop: 25,
              marginRight: 20,
            }}
          >
            <p>Thêm chương</p>
          </Button>
        </Link>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "red",
            color: "white",
            height: 32,
            fontSize: 15,
            marginBottom: 25,
            marginTop: 25,
          }}
          onClick={() => deletemanga.mutate()}
        >
          <p>Xóa chương</p>
        </Button>
      </div>
    </div>
  );
}
