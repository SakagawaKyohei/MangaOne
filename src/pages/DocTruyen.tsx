import React, { useEffect, useState } from "react";
import {
  Col,
  Flex,
  Row,
  Pagination,
  ConfigProvider,
  Button,
  Select,
} from "antd";
import * as mdIcons from "react-icons/md";

import mangaimage from "../images/mangaimage.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as faIcons from "react-icons/fa";
import useGetChapter from "../hooks/GetMangaInfo/useGetChapter";
import useGetChapterByCID from "../hooks/GetMangaInfo/useGetChapterByCID";
import useGetMangaByMID from "../hooks/GetMangaInfo/useGetMangaByMID";
import useAddFollow from "../hooks/Follow/useAddFollow";
import useUser from "../hooks/useUser";
import useDeleteFollow from "../hooks/Follow/useDeleteFollow";
import useIsFollow from "../hooks/Follow/useIsFollow";

import usePlusViewChapter from "../hooks/usePlusView";
import useAddHistory from "../hooks/history/useAddHistory";
//code lại more khi tràn thể loại
//chỉnh sửa đường dẫn tương đối image giữa các file
//lỗi flex nhiều màn hình image
//chinh top item thanh component
function DocTruyen() {
  const { mid } = useParams();

  const chapterlist = useGetChapter(mid ?? "");
  const { id } = useParams();
  const chapter = useGetChapterByCID(id as string);
  const [pages, setpages] = useState([]);
  const user = useUser();
  const history = useAddHistory(user.data?.id, mid);
  const follow = useAddFollow(user.data?.id, mid);
  const unfollow = useDeleteFollow(user.data?.id, mid);
  const followdata = useIsFollow(user.data?.id, mid);
  const [naem, setname] = useState("");
  const manga = useGetMangaByMID(mid ?? "");
  let names: any = [];
  const nav = useNavigate();

  let a = false;

  if (followdata.isSuccess) {
    if (followdata.data?.length != 0) {
      a = true;

      console.log(followdata.data?.length);
    } else {
      a = false;
      console.log(a);
    }
    console.log("aaaaaaaaaaa");
  }
  if (followdata.isError) {
    console.log((followdata.error as any).message);
  }

  const [isfollow, setisfollow] = useState<boolean>();
  useEffect(() => {
    setisfollow(a);
  }, [a]);

  let manganame = "";
  let currenti = -1;
  if (chapterlist.isSuccess) {
    chapterlist.data.data.map((i) => {
      names.push(i.name);
    });
  }
  if (chapter.isSuccess) {
    currenti = names.indexOf(naem);
  }
  if (manga.isSuccess) {
    manganame = manga.data.name;
  }
  let view = 0;

  if (chapter.isSuccess) {
    view = chapter.data.view;
    console.log(view);
  }
  const plusview = usePlusViewChapter(id, view);

  useEffect(() => {
    if (chapter.data != null) {
      console.log(chapter.data.content);
      setpages(chapter.data.content);
      setname(chapter.data.name);
      console.log(chapter.data.view);
      plusview.mutate();
      // updateSeenChap(id); > chap.seen += 1 > db
    }
  }, [chapter.data]);
  if (follow.isError) {
    return <></>;
  }
  if (follow.isSuccess) {
  }
  if (follow.isLoading) {
  }
  if (user.isSuccess) {
    history.mutate();
  }

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
      {/* {chapter.isError && <p className="text-sm mb-8 text-red-500">Error</p>}

      {chapter.isLoading && (
        <p className="text-sm mb-8 text-red-500">loading</p>
      )}

      {chapter.data && <p className="text-sm mb-8 text-red-500">Data</p>} */}

      <div>
        <div
          style={{
            fontSize: 18,
            backgroundColor: "black",
          }}
        >
          {/*truyen moi cap nhat*/}
          {/*danh sách truyện*/}
          <Row>
            <div
              style={{
                backgroundColor: "white",

                width: "100%",

                marginLeft: 60,
                marginRight: 60,
                marginTop: 80,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginLeft: 20,
                }}
              >
                <Link to={`/noi-dung/${mid}/`}>
                  <p
                    style={{
                      marginTop: 30,
                      fontSize: 20,
                      paddingBottom: 15,
                      color: "#FF9040",
                    }}
                    onClick={() => {}}
                  ></p>
                </Link>
                <p
                  style={{
                    marginTop: 30,
                    fontSize: 20,
                    paddingBottom: 15,
                    marginLeft: 5,
                  }}
                  onClick={() => {}}
                >
                  {manganame} - {naem}
                </p>
              </div>
              <Row style={{ backgroundColor: "#f6f7f8" }}>
                <Col
                  offset={7}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: 30,
                    marginTop: 30,
                  }}
                >
                  {
                    <Link to={"/"} style={{ color: "#FF9040" }}>
                      <faIcons.FaHome
                        style={{ fontSize: 20, marginRight: 10 }}
                      />
                    </Link>
                  }
                  {
                    <Link to={`/noi-dung/${mid}/`} style={{ color: "#FF9040" }}>
                      <faIcons.FaBars
                        style={{ fontSize: 20, marginRight: 10 }}
                      />
                    </Link>
                  }
                  {Number(chapterlist.data?.data.length) - 1 == currenti ? (
                    <>
                      {" "}
                      <Button
                        style={{
                          borderRadius: 0,
                          marginRight: 10,
                          backgroundColor: "#ccc",
                          color: "white",
                        }}
                        onClick={() => {
                          chapterlist.data?.data.map((item, key) => {
                            if (key == currenti + 1) {
                              //do hien thi tu cao xuong thap
                              console.log(item.id);
                              nav(`/doc-truyen/${mid}/${item.id}`);
                            }
                          });
                        }}
                        disabled
                      >
                        <mdIcons.MdArrowBackIos style={{ color: "white" }} />
                      </Button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Button
                        style={{
                          borderRadius: 0,
                          marginRight: 10,
                          backgroundColor: "#FF9040",
                          color: "white",
                        }}
                        onClick={() => {
                          chapterlist.data?.data.map((item, key) => {
                            if (key == currenti + 1) {
                              //do hien thi tu cao xuong thap
                              console.log(item.id);
                              nav(`/doc-truyen/${mid}/${item.id}`);
                            }
                          });
                        }}
                      >
                        <mdIcons.MdArrowBackIos style={{ color: "white" }} />
                      </Button>
                    </>
                  )}

                  <Select
                    onChange={(selectedValue) => {
                      nav(`/doc-truyen/${mid}/${selectedValue}`);
                    }}
                    value={naem}
                    style={{
                      width: 230,
                      marginRight: 10,
                    }}
                    // Gắn sự kiện onChange để theo dõi các giá trị được chọn
                    placeholder="Nhập tên và chọn thể loại"
                  >
                    {chapterlist.data?.data?.map((tl, i) => {
                      return (
                        <Select.Option key={i} value={tl.id}>
                          {tl.name}
                        </Select.Option>
                      );
                    })}
                  </Select>

                  {currenti == 0 ? (
                    <>
                      <Button
                        style={{
                          borderRadius: 0,
                          marginRight: 10,
                          backgroundColor: "#ccc",
                        }}
                        onClick={() => {
                          chapterlist.data?.data.map((item, key) => {
                            if (key == currenti - 1) {
                              //do hien thi tu cao xuong thap
                              console.log(item.id);
                              nav(`/doc-truyen/${mid}/${item.id}`);
                            }
                          });
                        }}
                        disabled
                      >
                        <mdIcons.MdArrowForwardIos
                          style={{ color: "white", fontWeight: "bold" }}
                        />
                      </Button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Button
                        style={{
                          borderRadius: 0,
                          marginRight: 10,
                          backgroundColor: "#FF9040",
                        }}
                        onClick={() => {
                          chapterlist.data?.data.map((item, key) => {
                            if (key == currenti - 1) {
                              //do hien thi tu cao xuong thap
                              console.log(item.id);
                              nav(`/doc-truyen/${mid}/${item.id}`);
                            }
                          });
                        }}
                      >
                        <mdIcons.MdArrowForwardIos
                          style={{ color: "white", fontWeight: "bold" }}
                        />
                      </Button>
                    </>
                  )}

                  {!isfollow ? (
                    <>
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#FF9040",
                          fontSize: 18,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 0,
                        }}
                        onClick={() => {
                          follow.mutate();
                          setisfollow(true);
                        }}
                      >
                        <p
                          style={{
                            paddingTop: 10,
                            paddingBottom: 10,
                          }}
                        >
                          Theo dõi
                        </p>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "red",
                          fontSize: 18,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 0,
                        }}
                        onClick={() => {
                          unfollow.mutate();
                          setisfollow(false);
                        }}
                      >
                        <p
                          style={{
                            paddingTop: 10,
                            paddingBottom: 10,
                          }}
                        >
                          Hủy theo dõi
                        </p>
                      </Button>
                    </>
                  )}
                </Col>
              </Row>
            </div>
          </Row>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.20)",
              height: 0.5,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {pages &&
                pages.map((i) => (
                  <>
                    <img
                      src={i}
                      onClick={() => {
                        console.log(id);
                      }}
                    ></img>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default DocTruyen;
export {};
//bug khi reload
