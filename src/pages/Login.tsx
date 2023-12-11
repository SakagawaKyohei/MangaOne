import React, { useState } from "react";

import { Button, Form, Input } from "antd";
import "../components/Login/Login.css";
import logo from "../images/logos.svg";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import useOLogin from "../hooks/useOLogin";
import { useSession } from "@supabase/auth-helpers-react";
import supabase from "../app/supabase";
import useUser from "../hooks/useUser";
function Login() {
  async function a() {
    const { data, error } = await supabase.auth.getSession();
    const b = data.session?.user.id;
    console.log(b);
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin({ email, password });
  const OloginMutation = useOLogin();
  const session = useUser();

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
            <p>MangaOne</p>
          </h1>
        </Link>
        <div style={{ order: 2 }} className="loginBorder">
          {session == null ? (
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
          ) : (
            <div>a</div>
          )}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                to="/dang-ky"
                style={{
                  color: "rgba(235, 190, 101, 1)",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                Đăng ký
              </Link>
              <Link
                to="/quen-mat-khau"
                style={{
                  color: "rgba(235, 190, 101, 1)",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                Quên mật khẩu
              </Link>
            </div>
            <Button className="font" style={ButtonStyle} onClick={() => a}>
              Đăng nhập
            </Button>
            <br />
            {loginMutation.isError && (
              <p className="text-sm mb-8 text-red-500">
                {(loginMutation.error as any)?.message}
              </p>
            )}
            {loginMutation.isSuccess && (
              <p className="text-sm mb-8 text-red-500">tc</p>
            )}
            {loginMutation.isLoading && (
              <p className="text-sm mb-8 text-red-500">l</p>
            )}
            <Button
              className="font GoogleIcon"
              style={{
                borderRadius: 0,
                marginTop: 20,
                border: "none",
                fontSize: 17,
                width: 350,
                height: 33,
                fontWeight: "bold",
                backgroundColor: "rgba(221, 75, 57, 1)",
              }}
              onClick={() => OloginMutation.mutate()}
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
