import React from "react";
import logo from "../../images/logos.svg";
function Login() {
  return (
    <div className="Black">
      <p style={{ fontSize: 0.01 }}>.</p>{" "}
      <div style={{ marginBottom: 30, marginTop: 80 }}></div>
      <div className="center">
        <div className="centerLogo" style={{ order: 1 }}>
          <img src={logo} alt="" style={{ paddingTop: 0 }} />
          <span className="MangaOne" style={{}}>
            MangaOne
          </span>
        </div>
        <div style={{ order: 2, marginTop: 10 }} className="loginBorder">
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
          <form action="">
            <div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white" }}>Tên đăng nhập</span>
                <br />
                <input
                  type="text"
                  name="TenDangNhap"
                  style={{
                    width: 300,
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: "rgba(61, 65, 74, 1)",
                    color: "white",
                    fontSize: 15,
                  }}
                />
                <br />
              </div>
              <div style={{ marginTop: 20 }}>
                <span style={{ color: "white" }}>Mật khẩu</span>
                <br />
                <input
                  type="password"
                  name="MatKhau"
                  style={{
                    width: 300,
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: "rgba(61, 65, 74, 1)",
                    color: "white",
                    fontSize: 15,
                  }}
                />
                <br />
              </div>
            </div>
            <div
              style={{
                marginTop: 20,
                width: 300,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a href="" style={{ color: "rgba(235, 190, 101, 1)" }}>
                Đăng ký
              </a>
              <a href="" style={{ color: "rgba(235, 190, 101, 1)" }}>
                Quên mật khẩu
              </a>
            </div>
            <button
              className="font"
              style={{
                marginTop: 20,
                width: 300,
                height: 30,
                fontWeight: "bold",
                backgroundColor: "rgba(235, 190, 101, 1)",
              }}
            >
              Đăng nhập
            </button>{" "}
            <br />
            <button
              className="font GoogleIcon"
              style={{
                marginTop: 20,
                width: 300,
                height: 30,
                fontWeight: "bold",
                backgroundColor: "rgba(221, 75, 57, 1)",
              }}
            >
              Đăng nhập bằng Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
