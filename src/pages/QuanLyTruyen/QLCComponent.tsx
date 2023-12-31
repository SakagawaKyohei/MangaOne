import { Checkbox, Col, Row, Tooltip } from "antd";
import React, { useState } from "react";
import capnhat from "../../images/CapNhat.svg";
import danhsach from "../../images/DanhSach.svg";
import useGetChapter from "../../hooks/GetMangaInfo/useGetChapter";
import { Link, useParams } from "react-router-dom";
interface Pros {
  tentruyen: string;
  mangaid: string;
  nguoidang: string;
  soluotxem: number;
  checkall: boolean;
  keyy: string;
  setmangaid: any;
}

//component cho mỗi truyện đã đăng

function QLCComponent(pros: Pros) {
  const [prev, setprev] = useState(false);
  const { id } = useParams();
  const [checked, setchecked] = useState(pros.checkall);

  if (prev != pros.checkall) {
    setchecked(pros.checkall);
    setprev(pros.checkall);
  }

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
            onChange={(e) => {
              setchecked(!checked);
              if (e.target.checked) {
                pros.setmangaid((prevArray: any) => [
                  ...prevArray,
                  pros.mangaid,
                ]);
              }
              if (!e.target.checked) {
                pros.setmangaid((prevArray: any[]) =>
                  prevArray.filter((item) => item !== pros.mangaid)
                );
              }
            }}
          >
            <p style={{ fontSize: 15 }}>{pros.tentruyen}</p>
          </Checkbox>
        </Col>
        <Col
          span={3}
          offset={5}
          style={{
            fontSize: 15,

            display: "flex",
            justifyContent: "center",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        ></Col>
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
        <Col span={3} offset={1}>
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
          <Link to={`/chinh-sua-chuong/${pros.mangaid}`}>
            <Tooltip title="Chỉnh sửa chương">
              <img src={capnhat} style={{ marginLeft: 50, height: 18 }} />
            </Tooltip>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default QLCComponent;
export {};
