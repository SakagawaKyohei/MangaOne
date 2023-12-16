import React, { useRef, useState } from "react";
import AccountPage from "../components/AccountPage/AccountPage";
import { Col, ConfigProvider, Form, Input, Row } from "antd";
import chualogin from "../images/Chualogin.svg";
import { InputInfo } from "./Data/InputData";
import useUser from "../hooks/useUser";
import NeedLogin from "./NeedLogin";
import useUpdateMetadata from "../hooks/useUpdateMetadata";
import mangaimage from "../images/mangaimage.jpg";

function Trangcanhan() {
  const style: React.CSSProperties = {
    fontSize: 16,
    paddingBottom: 10,
  };

  const style2: React.CSSProperties = {
    marginBottom: 12,
    marginRight: 20,
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
  };
  const user = useUser();

  const inputref = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<Blob | null>(null);
  if (user.data == null) {
    return <NeedLogin />;
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleInputClick = () => {
    inputref.current?.click();
  };
  return (
    <div>
      <p style={{ fontSize: 0.01 }}>.</p>
      <div style={{ marginBottom: 30, marginTop: 80 }}>
        <Row>
          <Col span={6}>
            <AccountPage i={0} />
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
              THÔNG TIN TÀI KHOẢN
            </h1>
            <div
              style={{
                marginTop: 25,
                marginBottom: 25,
                marginRight: 30,
              }}
            >
              <div style={style}>Ảnh đại diện</div>

              <div className="centeravt">
                <div onClick={handleInputClick}>
                  {image == null ? (
                    <img
                      src={mangaimage}
                      style={{
                        marginRight: 10,
                        marginTop: 25,
                        height: 200,
                        marginBottom: 50,
                        borderRadius: "100%",
                        width: 200,
                      }}
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(image)}
                      style={{
                        marginRight: 10,
                        marginTop: 25,
                        height: 200,
                        marginBottom: 50,
                        borderRadius: "100%",
                        width: 200,
                      }}
                    />
                  )}
                  <input
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={inputref}
                  ></input>
                </div>
              </div>

              <div>
                <Form>
                  <div>
                    <InputInfo />
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Trangcanhan;
export {};
