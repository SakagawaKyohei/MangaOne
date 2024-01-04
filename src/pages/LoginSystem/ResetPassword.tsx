import React, { useState } from "react";

import { Button, Form, Input, message } from "antd";
import "../../components/Login/Login.css";
import logo from "../../images/logos.svg";
import { Link, useNavigate } from "react-router-dom";
import useResetPassword from "../../hooks/PasswordManagement/useResetPassword";
import { error } from "console";

function ResetPassword() {
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

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const resetpassword = useResetPassword(password);
  if (resetpassword.isSuccess) {
    message.success("Đổi mật khẩu thành công, bạn sẽ quay lại trang chủ");
    setTimeout(() => {
      window.location.reload();
    }, 500);
    navigate("/");
  }
  if (resetpassword.isError) {
    return <>{(resetpassword.error as any).message}</>;
  }
  if (resetpassword.isLoading) {
    return <>loading</>;
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
            Đổi mật khẩu
          </h1>
          <Form>
            <div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white", fontSize: 15 }}>
                  Mật khẩu mới
                </span>
                <br />
                <Input
                  type="text"
                  name="TenDangNhap"
                  style={InputStyle}
                  onChange={(e) => setPassword(e.target.value)}
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
            ></div>
            <Button
              className="font"
              style={ButtonStyle}
              onClick={() => resetpassword.mutate()}
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
            Mật khẩu mới sẽ được cập nhật
            {/*chinh ui lai sau*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
