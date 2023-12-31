import React from "react";
import Template from "./Template";
import { ThemMoiChapterData } from "../Data/ComponentData";
import AccountPage from "../../components/AccountPage/AccountPage";
import { Col, ConfigProvider, Row } from "antd";
import { useParams } from "react-router-dom";
import useGetManga from "../../hooks/GetMangaInfo/useGetMangaByMID";

function ThemMoiChapter() {
  const { id } = useParams();
  const manga = useGetManga(id as string);
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              hoverBorderColor: "#FF9040",
              activeBorderColor: "#FF9040",
            },
          },
        }}
      >
        <div>
          <div>
            <p style={{ fontSize: 0.01 }}>.</p>
            <div style={{ marginBottom: 30, marginTop: 80 }}>
              <Row>
                <Col span={6}>
                  <AccountPage i={2} />
                </Col>
                <Col span={17} offset={1}>
                  <h1
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      marginBottom: 20,
                      fontSize: 21,
                    }}
                  >
                    THÊM MỚI CHƯƠNG
                  </h1>
                  <div className="khung">
                    <p style={{ fontSize: 17, padding: 15 }}>
                      {manga.data.name} - Thêm mới chương
                    </p>
                    <div
                      style={{
                        width: "100%",
                        height: 3,
                        backgroundColor: "#D9D9D9",
                      }}
                    />
                    <ThemMoiChapterData />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default ThemMoiChapter;
