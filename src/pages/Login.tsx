import React from "react";
import {
  Col,
  Flex,
  Row,
  Pagination,
  ConfigProvider,
  Button,
  Grid,
  Form,
  Input,
} from "antd";
import "../components/Login/Login.css";
import logo from "../images/logos.svg";
import { Link } from "react-router-dom";
function Login() {
  const InputStyle: React.CSSProperties = {
    border: "none",
    borderRadius: 5,
    width: 350,
    marginTop: 5,
    height: 30,

    backgroundColor: "rgba(61, 65, 74, 1)",
    color: "white",
    fontSize: 15,
  };
  const ButtonStyle: React.CSSProperties = {
    marginTop: 20,
    width: 350,
    height: 33,
    borderRadius: 0,
    border: "none",
    fontWeight: "bold",
    backgroundColor: "rgba(235, 190, 101, 1)",
  };
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
            style={{ marginRight: 10, marginTop: 50, marginBottom: 40 }}
          />
          <h1
            style={{
              fontSize: 30,
              marginBottom: 55,
              marginTop: 65,
              marginRight: 10,
              color: "white",
            }}
          >
            MangaOne
          </h1>
        </Link>
        <div style={{ order: 2 }} className="loginBorder">
          <h1
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 10,
              fontSize: 30,
            }}
          >
            Đăng nhập
          </h1>
          <Form>
            <div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white" }}>Tên đăng nhập</span>
                <br />
                <Input type="text" name="TenDangNhap" style={InputStyle} />
                <br />
              </div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white" }}>Mật khẩu</span>
                <br />
                <Input type="password" name="MatKhau" style={InputStyle} />
                <br />
              </div>
            </div>
            <div
              style={{
                marginTop: 20,
                width: 350,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a
                href=""
                style={{
                  color: "rgba(235, 190, 101, 1)",
                  textDecoration: "none",
                }}
              >
                Đăng ký
              </a>
              <a
                href=""
                style={{
                  color: "rgba(235, 190, 101, 1)",
                  textDecoration: "none",
                }}
              >
                Quên mật khẩu
              </a>
            </div>
            <Button className="font" style={ButtonStyle}>
              Đăng nhập
            </Button>
            <br />
            <Button
              className="font GoogleIcon"
              style={{
                borderRadius: 0,
                marginTop: 20,
                border: "none",
                fontSize: 16,
                width: 350,
                height: 33,
                fontWeight: "bold",
                backgroundColor: "rgba(221, 75, 57, 1)",
              }}
            >
              Đăng nhập bằng Google
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
