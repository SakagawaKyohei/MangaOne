import * as faIcons from "react-icons/fa";
import mangaimage from "../images/mangaimage.jpg";
import content from "../images/content.svg";
import { Button } from "antd";
import { FaAngleDoubleRight } from "react-icons/fa";
import ChapterList from "../components/ChapterList";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useRef, useState } from "react";
import useGetMangaByMID from "../hooks/GetMangaInfo/useGetMangaByMID";
import useGetChapter from "../hooks/GetMangaInfo/useGetChapter";
import { useParams } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
function NoiDungTruyen() {
  const { id } = useParams();
  const mid = id ? id.toString() : "";
  const manga = useGetMangaByMID(mid);
  const chapter = useGetChapter(mid, "chapterlist" + mid);
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

  //check div overflow
  const [isOverflow, setIsOverflow] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

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
                marginRight: 50,

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
                      console.log(mid + "a");
                    }}
                  >
                    <faIcons.FaHeart
                      style={{ color: "white", marginRight: 10 }}
                    />
                    <p>Theo dõi</p>
                  </Button>

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
                      <p> 0.00</p>
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
                      style={{ color: "#FF9040" }}
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
              <ChapterList />
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
