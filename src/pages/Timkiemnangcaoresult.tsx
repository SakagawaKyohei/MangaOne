import { Col, ConfigProvider, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import AdvanceSearchCart from "../components/AdvanceSearchCart";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAdvanceSearch from "../hooks/useAdvanceSearch";

function Timkiemnangcaoresult() {
  const [pages, setpages] = useState<number>(1);
  const { ten, tac, theloai, page } = useParams();
  const a = [""];
  let theloaiArray: string[] = [];
  if (theloai != null) {
    theloaiArray = theloai.split(",").map((category) => category.trim());
  }

  useEffect(() => {
    if (page == undefined) {
      setpages(1);
    } else {
      setpages(Number(page));
    }
  }, [page]);
  const navigate = useNavigate();

  const manga = useAdvanceSearch(pages, ten, tac, theloaiArray);
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemSize: 50,
          },
        },
      }}
    >
      <div>
        <div style={{ marginLeft: 35, marginRight: 40 }}>
          <p style={{ fontSize: 0.01 }}>.</p>
          <p
            style={{
              fontSize: 30,
              textAlign: "center",
              marginBottom: 20,
              marginTop: 80,
            }}
          >
            Tìm kiếm nâng cao
          </p>
          <Link to="/tim-kiem-nang-cao" style={{ textDecoration: "none" }}>
            <p style={{ color: "#FF4040", paddingBottom: 10, fontSize: 20 }}>
              Nhấn vào đây để tìm với từ khóa khác
            </p>
          </Link>
          <div
            style={{
              width: "100%",
              height: 1,
              background: "#000",
              marginBottom: 20,
            }}
          />
          <div>
            <Row gutter={[16, 24]}>
              {manga.data?.pagemanga.map((item) =>
                item.author ? (
                  <Col key={item.id} span={12}>
                    <AdvanceSearchCart mangaid={item.id} />
                  </Col>
                ) : (
                  <Col key={item.id} span={12}>
                    <AdvanceSearchCart mangaid={item.id} />
                  </Col>
                )
              )}
            </Row>

            <div className="pagination">
              <Pagination
                total={manga.data?.allmanga.length}
                pageSize={12}
                showSizeChanger={false}
                showLessItems
                current={pages}
                onChange={(e) => {
                  navigate(
                    (`/ket-qua/${ten}/${tac}/${theloai}/` + e) as string
                  );
                  setpages(e);
                  console.log(manga.data?.pagemanga);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Timkiemnangcaoresult;
