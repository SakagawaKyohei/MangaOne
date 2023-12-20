import * as faIcons from "react-icons/fa";
import mangaimage from "../images/mangaimage.jpg";
import content from "../images/content.svg";
import { Button } from "antd";
import ChapterList from "../components/ChapterList";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
function NoiDungTruyen() {
  return (
    <div>
      <div style={{ height: 1750 }}>
        {/*can fix height*/}
        <div style={{ height: "40vh" }}>
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
            >
              <div
                style={{
                  marginTop: "15vh",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  src={mangaimage}
                  style={{ height: 300, paddingRight: 18 }}
                />
                <div>
                  <h1 style={{ color: "white", paddingBottom: 5 }}>
                    TÊN TRUYỆN
                  </h1>
                  <p
                    style={{ color: "white", fontSize: 18, paddingBottom: 58 }}
                  >
                    Tên khác
                  </p>
                  <p
                    style={{ color: "white", fontSize: 18, paddingBottom: 55 }}
                  >
                    Tên tác giả
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
                  >
                    <faIcons.FaHeart
                      style={{ color: "white", marginRight: 10 }}
                    />
                    <p>Theo dõi</p>
                  </Button>
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
                      THỂ LOẠI
                    </p>
                  </button>
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
              <p>Đây là nội dung</p>
              <div
                style={{
                  paddingTop: 20,
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
            src={mangaimage}
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
