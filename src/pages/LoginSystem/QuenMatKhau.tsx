import React, { useState } from "react";

import { Button, Form, Input, message } from "antd";
import "../../components/Login/Login.css";
import logo from "../../images/logos.svg";
import { Link } from "react-router-dom";
import useSendmail from "../../hooks/PasswordManagement/useSendMail";
function QuenMatKhau() {
  const [mail, setMail] = useState("");
  const sendmail = useSendmail(mail);
  if (sendmail.isSuccess) {
    message.success(
      "Hướng dẫn khôi phục tài khoản đã được gửi đến mail của bạn"
    );
  }
  const InputStyle: React.CSSProperties = {
    border: "none",
    borderRadius: 5,
    width: 350,
    marginTop: 5,
    height: 30,

    backgroundColor: "rgba(61, 65, 74, 1)",
    color: "white",
    zIndex: 6,
    fontSize: 16,
  };
  const ButtonStyle: React.CSSProperties = {
    marginTop: 20,
    width: 350,
    height: 33,
    borderRadius: 0,
    border: "none",
    zIndex: 6,
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "rgba(235, 190, 101, 1)",
  };
  if (sendmail.isError) {
    return <>{(sendmail.error as any)?.message}</>;
  }

  return (
    <div className="Black">
      <div className="center1">
        <Link
          to="/"
          style={{
            display: "flex",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            src={logo}
            alt=""
            width={60}
            height={60}
            style={{
              marginRight: 10,
              marginTop: 50,
              marginBottom: 40,
              zIndex: 6,
            }}
          />
          <h1
            style={{
              fontSize: 30,
              marginBottom: 55,
              marginTop: 65,
              marginRight: 10,
              zIndex: 6,
              color: "white",
            }}
          >
            MangaOne
          </h1>
        </Link>
        <div style={{ order: 2 }} className="loginBorder f">
          <h1
            style={{
              color: "white",
              textAlign: "center",

              fontSize: 30,
            }}
          >
            Quên mật khẩu
          </h1>
          <Form>
            <div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white", fontSize: 15 }}>
                  Email của bạn
                </span>
                <br />
                <Input
                  type="text"
                  name="TenDangNhap"
                  style={InputStyle}
                  onChange={(e) => setMail(e.target.value)}
                />
                <br />
              </div>
            </div>
            <div
              style={{
                marginTop: 15,
                width: 350,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link
                to="/dang-nhap"
                style={{
                  color: "rgba(235, 190, 101, 1)",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                Quay lại đăng nhập
              </Link>
            </div>
            <Button
              className="font"
              style={ButtonStyle}
              onClick={() => sendmail.mutate()}
            >
              Xác nhận
            </Button>
            <br />
          </Form>
          <div
            style={{
              marginTop: 60,
              height: 70,
              backgroundColor: "#2e2f37",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#b2b2b2",
            }}
          >
            Email khôi phục sẽ được gửi đến tài khoản của bạn
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuenMatKhau;
