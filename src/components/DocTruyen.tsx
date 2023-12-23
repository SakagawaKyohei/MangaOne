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
import { useParams } from "react-router-dom";
import * as faIcons from "react-icons/fa";
import useGetChapter from "../hooks/GetMangaInfo/useGetChapter";
import useGetChapterByCID from "../hooks/GetMangaInfo/useGetChapterByCID";
//code lại more khi tràn thể loại
//chỉnh sửa đường dẫn tương đối image giữa các file
//lỗi flex nhiều màn hình image
//chinh top item thanh component
function DocTruyen() {
  const { id } = useParams();
  const chapter = useGetChapterByCID(id as string);
  const [pages, setpages] = useState([]);
  useEffect(() => {
    if (chapter.data != null) {
      console.log(chapter.data.content);
      setpages(chapter.data.content);
    }
  }, [chapter.data]);

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

                marginTop: 60,
              }}
            >
              <p style={{ marginTop: 30, fontSize: 20, paddingBottom: 15 }}>
                Tên truyện
              </p>
              <p style={{ fontSize: 20, color: "#FF9040", paddingBottom: 30 }}>
                Tên khác
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <faIcons.FaBars />
                <faIcons.FaHome />
                <Button style={{ borderRadius: 0 }}>
                  <mdIcons.MdArrowBackIos />
                </Button>
                <Select></Select>
                <Button style={{ borderRadius: 0 }}>
                  <mdIcons.MdArrowForwardIos />
                </Button>
              </div>
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
