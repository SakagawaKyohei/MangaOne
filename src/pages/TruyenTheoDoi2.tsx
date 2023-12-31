import React from "react";
import AccountPage from "../components/AccountPage/AccountPage";
import { Button, Col, Form, Input, Pagination, Row } from "antd";

import MangaCart from "../components/MangaCart/MangaCart";
import * as mdIcons from "react-icons/md";
import useUser from "../hooks/useUser";
import NeedLogin from "./NeedLogin";
import useGetMangaFollowId from "../hooks/Follow/useMangaFollowId";

function TruyenTheoDoi2() {
  const style2: React.CSSProperties = {
    marginRight: 35,
    fontSize: 18,
  };
  const input2: React.CSSProperties = {
    fontSize: 18,
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  };
  const user = useUser();
  const mids = useGetMangaFollowId(user.data?.id);
  if (user.data == null) {
    return <NeedLogin />;
  }
  return (
    <div>
      <p style={{ fontSize: 0.01 }}>.</p>
      <div style={{ marginBottom: 30, marginTop: 80 }}>
        <Row>
          <Col span={6}>
            <AccountPage i={1} />
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
              TRUYỆN THEO DÕI
            </h1>
            <div style={style2}>
              <Row gutter={[16, 24]}>
                {mids.isSuccess ? (
                  mids.data.map((item) => (
                    <Col span={6} key={item.manga_id}>
                      <MangaCart mangaid={item.manga_id} />
                    </Col>
                  ))
                ) : (
                  <></>
                )}
              </Row>
              {/* <div
                className="chuyenhuong"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                  marginTop: 20,
                }}
              >
                <mdIcons.MdArrowBackIos
                  fontSize={35}
                  style={{ marginRight: 8 }}
                />
                <h1 style={{ color: "#FF9040", fontSize: 30 }}>1</h1>
                <mdIcons.MdArrowForwardIos
                  fontSize={35}
                  style={{ marginLeft: 16 }}
                />
              </div> */}
            </div>
            {/*custom lai*/}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TruyenTheoDoi2;
export {};
