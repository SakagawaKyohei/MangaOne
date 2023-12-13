import React, { useState } from "react";
import useCreateUser from "../hooks/LoginSystem/useCreateUser";

import { Button, Form, Input } from "antd";
import "../components/Login/Login.css";
import logo from "../images/logos.svg";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../app/supabase";
function DangKy() {
  async function a() {
    const { data, error } = await supabase.auth.getSession();
    const b = data.session?.user.id;
    console.log(b);
  }
  //class css
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
  //class css

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const createUserMutation = useCreateUser({
    email,
    password,
    username,
  });

  if (createUserMutation.isSuccess) {
    console.log("a");
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
              marginTop: 20,
              marginBottom: 10,
              zIndex: 6,
            }}
          />
          <h1
            style={{
              fontSize: 30,
              marginBottom: 25,
              marginTop: 35,
              marginRight: 10,
              zIndex: 6,
              color: "white",
            }}
          >
            MangaOne
          </h1>
        </Link>
        <div style={{ order: 2 }} className="loginBorder signup">
          <h1
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 10,
              fontSize: 30,
            }}
          >
            Đăng ký
          </h1>
          <Form>
            <div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white", fontSize: 15 }}>
                  Tên đăng nhập
                </span>
                <br />
                <Input
                  type="text"
                  name="TenDangNhap"
                  style={InputStyle}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
              </div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white", fontSize: 15 }}>Mật khẩu</span>
                <br />
                <Input
                  type="password"
                  name="MatKhau"
                  style={InputStyle}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white", fontSize: 15 }}>
                  Xác nhận mật khẩu
                </span>
                <br />
                <Input type="text" name="XacNhan" style={InputStyle} />
                <br />
              </div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white", fontSize: 15 }}>Email</span>
                <br />
                <Input
                  type="text"
                  name="Email"
                  style={InputStyle}
                  onChange={(e) => setEmail(e.target.value)}
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
                Quay lại đăng nhập {/*co thoi gian them back icon*/}
              </Link>
            </div>
            <Button
              className="font"
              style={ButtonStyle}
              onClick={() => createUserMutation.mutate()}
            >
              {createUserMutation.error ? (
                <span>{(createUserMutation.error as any).message}</span>
              ) : (
                <span>Sign up</span>
              )}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default DangKy;
