import * as faIcons from "react-icons/fa";
import mangaimage from "../images/mangaimage.jpg";
import content from "../images/content.svg";
import { Button, Col, Row } from "antd";
import { FaAngleDoubleRight } from "react-icons/fa";
import ChapterList from "../components/ChapterList";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useRef, useState } from "react";
import useGetMangaByMID from "../hooks/GetMangaInfo/useGetMangaByMID";
import useGetChapter from "../hooks/GetMangaInfo/useGetChapter";
import { Link, useParams } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import useUser from "../hooks/useUser";
import useIsFollow from "../hooks/Follow/useIsFollow";
import useAddFollow from "../hooks/Follow/useAddFollow";
import useDeleteFollow from "../hooks/Follow/useDeleteFollow";
import useGetMangaView from "../hooks/GetMangaInfo/useGetViewManga";
import useAddHistory from "../hooks/history/useAddHistory";
function NoiDungTruyen() {
  const { id } = useParams();
  const mid = id ? id.toString() : "";
  const user = useUser();
  const followdata = useIsFollow(user.data?.id, mid);
  const follow = useAddFollow(user.data?.id, mid);
  const history = useAddHistory(user.data?.id, mid);
  const unfollow = useDeleteFollow(user.data?.id, mid);
  let a = false;

  if (followdata.isSuccess) {
    if (followdata.data.length != 0) {
      a = true;
    }
  }
  if (follow.isSuccess) {
    a = true;
  }

  const manga = useGetMangaByMID(mid);
  const [isfollow, setisfollow] = useState<boolean>();
  useEffect(() => {
    setisfollow(a);
  }, [a]);
  const chapter = useGetChapter(mid);
  const [chapterdata, setchapterdata] = useState<any[]>([]);
  const [manganame, setmanganame] = useState("");
  const [mangabia, setmangabia] = useState("");
  const [mangadetail, setmangadetail] = useState("");
  const [mangatenkhac, setmangatenkhac] = useState("");
  const [mangatacgia, setmangatacgia] = useState("");
  const [mangatheloai, setmangatheloai] = useState<string[]>([]);
  const pRef = useRef<HTMLParagraphElement>(null);
  const [pheight, setpheight] = useState(0);
  const [xemthem, setxemthem] = useState(false);

  const [data, setdata] = useState<any[]>();
  const [more, setmore] = useState(false);
  const getview = useGetMangaView(id);
  useEffect(() => {
    if (chapter.data != null) {
      setdata(chapter.data.last20);
    }
  }, [chapter.data]);
  const [divheight, setdivheight] = useState(0);
  const dRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (manga.data != null) {
      setmanganame(manga.data.name);
      setmangabia(manga.data.biatruyen);
      setmangadetail(manga.data.detail);
      setmangatacgia(manga.data.author);
      setmangatenkhac(manga.data.other_name);
      setmangatheloai(manga.data.genre);
    }
  }, [manga]);
  useEffect(() => {
    if (chapter.data != null) {
      console.log(chapter.data.last);
      setchapterdata(chapter.data.last);
    }
  }, [chapter.data]);

  useEffect(() => {
    history.mutate();
  }, [user.data]);

  //check div overflow
  const [isOverflow, setIsOverflow] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (dRef.current) {
      setdivheight(dRef.current.clientHeight);
    }
  }, []);
  useEffect(() => {
    if (dRef.current) {
      setdivheight(dRef.current.clientHeight);
    }
  }, [chapterdata]);

  useEffect(() => {
    if (pRef.current) {
      setpheight(pRef.current.clientHeight);
    }
    if (dRef.current) {
      setdivheight(dRef.current.clientHeight);
    }
    const checkOverflow = () => {
      const divElement = divRef.current;

      if (divElement) {
        const isOverflowing =
          divElement.scrollHeight > divElement.clientHeight ||
          divElement.scrollWidth > divElement.clientWidth;

        setIsOverflow(isOverflowing);
      }
    };

    checkOverflow();

    // Thêm sự kiện resize để kiểm tra lại khi cửa sổ thay đổi kích thước
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [mangadetail]);
  return (
    <div>
      <div
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          height: divheight + 175,
        }}
      >
        <div>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.40)",
              width: "100%",
              height: "40vh",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <div
              style={{
                marginLeft: 35,
                marginRight: 35,

                position: "relative",
              }}
              ref={dRef}
            >
              <div
                style={{
                  marginTop: "15vh",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img src={mangabia} style={{ height: 300, paddingRight: 18 }} />
                <div>
                  <h1 style={{ color: "white", paddingBottom: 5 }}>
                    {manganame}
                  </h1>

                  <p
                    style={{
                      color: "white",
                      fontSize: 18,
                      paddingBottom: 42,
                      paddingTop: 8,
                    }}
                  >
                    {mangatenkhac == "" ? manganame : mangatenkhac}
                  </p>
                  <p
                    style={{ color: "white", fontSize: 18, paddingBottom: 45 }}
                  >
                    {mangatacgia == "" ? "Tên tác giả" : mangatacgia}
                  </p>
                  {!isfollow ? (
                    <>
                      <Button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",

                          backgroundColor: "#FF9040",
                          color: "white",
                          fontSize: 18,
                          height: 45,
                        }}
                        onClick={() => {
                          follow.mutate();
                          setisfollow(true);
                        }}
                      >
                        <p>Theo dõi</p>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",

                          backgroundColor: "red",
                          color: "white",
                          fontSize: 18,
                          height: 45,
                        }}
                        onClick={() => {
                          console.log(mid + "a");
                          unfollow.mutate();
                          setisfollow(false);
                        }}
                      >
                        <p>Hủy theo dõi</p>
                      </Button>
                    </>
                  )}

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {mangatheloai.map((item) => (
                      <div>
                        <button
                          style={{
                            backgroundColor: "#D9D9D9",
                            borderRadius: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "none",
                            marginTop: 30,
                            marginBottom: 22,
                            marginRight: 15,
                          }}
                        >
                          <p
                            style={{
                              fontSize: 14,
                              padding: 3,
                              paddingLeft: 8,
                              paddingRight: 8,
                            }}
                          >
                            {item.toLocaleUpperCase()}
                          </p>
                        </button>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        marginRight: 40,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <faIcons.FaRegStar style={{ marginRight: 10 }} />
                      <p> 0.00</p>
                    </div>
                    <div
                      style={{
                        marginRight: 40,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <faIcons.FaRegHeart style={{ marginRight: 10 }} />
                      <p> 0.00</p>
                    </div>
                    <div
                      style={{
                        marginRight: 40,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <faIcons.FaRegComment style={{ marginRight: 10 }} />
                      <p> 0.00</p>
                    </div>
                    <div
                      style={{
                        marginRight: 35,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <faIcons.FaRegEye style={{ marginRight: 10 }} />
                      <p> {getview.data}</p>
                    </div>
                  </div>
                  {/*clear code sau*/}
                </div>
              </div>
              <div
                style={{
                  paddingTop: 20,
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: 10,
                  alignItems: "end",
                }}
              >
                <img src={content} style={{ width: 18, paddingBottom: 3 }} />
                <p style={{ fontSize: 17, marginLeft: 10 }}>NỘI DUNG</p>
              </div>
              <div className="line2" style={{ marginBottom: 10 }} />
              {pheight > 95 && !xemthem ? (
                <>
                  <div
                    style={{
                      height: 95,
                      overflow: "hidden",
                    }}
                    ref={divRef}
                  >
                    <p style={{ fontSize: 18 }} ref={pRef}>
                      {mangadetail}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <FaAngleDoubleRight
                      style={{ color: "#FF9040", marginRight: 5 }}
                      onClick={() => setxemthem(true)}
                    />
                    <p
                      style={{
                        color: "#FF9040",
                      }}
                      onClick={() => {
                        setxemthem(true);
                        console.log(xemthem);
                      }}
                    >
                      Xem thêm
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div ref={divRef}>
                    <p style={{ fontSize: 18 }} ref={pRef}>
                      {mangadetail}
                    </p>
                  </div>
                </>
              )}
              <div
                style={{
                  paddingTop: 16,
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: 15,
                  alignItems: "end",
                }}
              >
                <faIcons.FaList style={{ fontSize: 18, paddingBottom: 3 }} />
                <p style={{ fontSize: 17, marginLeft: 10 }}>DANH SÁCH CHƯƠNG</p>
              </div>
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
                    {data &&
                      data.map((item, i) => (
                        <div>
                          <div>
                            <Row style={{ marginBottom: 10, marginTop: 10 }}>
                              <Col span={8} style={{ fontSize: 16 }}>
                                <Link
                                  to={`/doc-truyen/${id}/${item.id}`}
                                  className="mangaitemtitle1"
                                >
                                  <p style={{ paddingLeft: 10 }}>{item.name}</p>
                                </Link>
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
                                  17 ngày trước
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

                          {i !== data.length - 1 && ( // Check if it's not the last item
                            <div
                              style={{
                                background: "rgba(0, 0, 0, 0.20)",
                                height: 1,
                                marginLeft: 10,
                                marginRight: 10,
                              }}
                            />
                          )}
                        </div>
                      ))}

                    {chapter.data && chapter.data?.data.length > 20 && !more ? (
                      <>
                        <div
                          style={{
                            background: "rgba(0, 0, 0, 0.20)",
                            height: 1,
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                        />
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
                          onClick={() => {
                            if (chapter.data != null) {
                              setdata(chapter.data.data);
                              setmore(true);
                            }
                          }}
                        >
                          Xem thêm
                        </Button>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 20,
                  paddingBottom: 15,
                }}
              >
                <faIcons.FaRegCommentAlt fontSize={18} style={{}} />
                <p style={{ fontSize: 17, marginLeft: 10 }}>BÌNH LUẬN </p>
              </div>
              <TextArea
                style={{ height: 150, fontSize: 17 }}
                placeholder="Viết bình luận"
              />
            </div>
          </div>
          <img
            src={mangabia}
            style={{
              width: "100%",
              height: "40vh",
              objectFit: "cover",
              objectPosition: "20% 25%",
            }}
            className="biatruyen"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default NoiDungTruyen;
