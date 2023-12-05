import React from "react";
import mangaimage from "/MangaOne/src/images/mangaimage.jpg";
import { Col, Flex, Row } from "antd";
import * as FaIcons from "react-icons/fa";
import { items } from "./Navbar/DropdownData";

function AdvanceSearchCart() {
  const style: React.CSSProperties = {
    marginRight: 5,
    marginTop: "2.5",
  };
  let theloai: string[];
  theloai = ["ACTION", "PSYCHOLOGICAL", "ROMANCE", "COMEDY", "ADVENTURE"];
  return (
    <div style={{ backgroundColor: "rgba(217, 217, 217, 0.71)" }}>
      <div style={{ paddingTop: 15, paddingLeft: 10 }}>
        <Row gutter={15}>
          <Col span={6}>
            <img
              src={mangaimage}
              style={{ width: "100%", paddingBottom: 30 }}
            />
          </Col>
          <Col span={18}>
            <div>
              <h2 style={{ fontSize: 22, marginBottom: 7 }}>Tên truyện</h2>
              <div>
                <Flex gap={30} style={{ fontSize: 15, paddingBottom: 7 }}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FaIcons.FaRegStar style={style} />
                    <p>9.23</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FaIcons.FaRegHeart style={style} />
                    <p>15k</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FaIcons.FaRegComment style={style} />
                    <p>134</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FaIcons.FaRegEye style={style} />
                    <p>1.248k</p>
                  </div>
                </Flex>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: 7,
                  }}
                >
                  {theloai.map((items) => (
                    <h4 style={{ fontSize: 12, marginRight: 10 }}>{items}</h4>
                  ))}
                </div>
                Nội dung
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdvanceSearchCart;
