import Template from "./Template";
import { ChapterDaDangData, TruyenDaDangData } from "../Data/ComponentData";
import useUser from "../../hooks/useUser";
import NeedLogin from "../NeedLogin";
import { Col, Row } from "antd";
import AccountPage from "../../components/AccountPage/AccountPage";
import { useParams } from "react-router-dom";
import useGetManga from "../../hooks/GetMangaInfo/useGetMangaByMID";
import { useEffect, useState } from "react";

function ChapterDaDang() {
  const { id } = useParams();
  const manga = useGetManga(id as string);
  const user = useUser();
  const [name, setname] = useState("");
  useEffect(() => {
    if (manga.data != null) {
      setname(manga.data.name as string);
    }
  }, [manga.data]);
  if (user.data == null) {
    return <NeedLogin />;
  }
  return (
    <div>
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
                  QUẢN LÝ CHƯƠNG
                </h1>
                <div className="khung">
                  <p style={{ fontSize: 17, padding: 15 }}>
                    {name} - Quản lý chương{" "}
                  </p>

                  <div
                    style={{
                      width: "100%",
                      height: 3,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <ChapterDaDangData />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChapterDaDang;
export {};
