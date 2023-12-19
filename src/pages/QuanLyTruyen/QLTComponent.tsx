import { Checkbox, Col, Row } from "antd";
import React, { useState } from "react";
import capnhat from "../../images/CapNhat.svg";
import danhsach from "../../images/DanhSach.svg";
import useGetChapter from "../../hooks/GetMangaInfo/useGetChapter";
interface Pros {
  tentruyen: string;
  mangaid: string;
  nguoidang: string;
  soluotxem: number;
  checkall: boolean;
}

//component cho mỗi truyện đã đăng

function QLTComponent(pros: Pros) {
  const chapter = useGetChapter(pros.mangaid);
  const [checked, setchecked] = useState(pros.checkall);
  return (
    <div style={{ backgroundColor: "rgba(217, 217, 217, 0.20)" }}>
      <Row
        style={{
          backgroundColor: "rgba(217, 217, 217, 0.20)",
          height: 40,
          display: "flex",
          alignItems: "center",
          fontSize: 15,
        }}
      >
        <Col span={5}>
          <Checkbox
            style={{ marginLeft: 10 }}
            checked={checked}
            onChange={() => setchecked(!checked)}
          >
            <p style={{ fontSize: 15 }}>{pros.tentruyen}</p>
          </Checkbox>
        </Col>
        <Col
          span={3}
          offset={6}
          style={{
            fontSize: 15,

            display: "flex",
            justifyContent: "center",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          {chapter.data?.count}
        </Col>
        <Col
          span={3}
          style={{
            fontSize: 15,

            display: "flex",
            justifyContent: "center",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          {pros.nguoidang}
        </Col>
        <Col span={3}>
          <div
            style={{
              paddingLeft: 10,
              fontSize: 15,

              display: "flex",
              justifyContent: "center",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            {pros.soluotxem}
          </div>
        </Col>
        <Col span={4}>
          {" "}
          <img src={capnhat} style={{ marginLeft: 35, height: 18 }} />
          <img
            src={danhsach}
            style={{ marginLeft: 20, height: 18, width: 18 }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default QLTComponent;
export {};
