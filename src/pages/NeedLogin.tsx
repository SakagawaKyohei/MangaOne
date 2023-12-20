import { Button } from "antd";
import cry from "../images/cry.png";
import { Link } from "react-router-dom";

function NeedLogin() {
  return (
    <>
      <div
        style={{
          marginLeft: 35,
          marginRight: 45,
        }}
      >
        <p style={{ fontSize: 0.01 }}>.</p>{" "}
        {/*collision tăng chiều cao cho div*/}
        <div
          style={{
            marginBottom: 30,
            marginTop: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ paddingBottom: 40 }}>
            Bạn cần đăng nhập để truy cập chức năng này
          </h2>
          <div
            style={{ display: "flex", flexDirection: "row", marginBottom: 50 }}
          >
            <Link to={"/dang-nhap"} style={{ textDecoration: "none" }}>
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 0,
                  backgroundColor: "#FF9040",
                  color: "white",
                  fontSize: 20,
                  height: 45,
                  marginRight: 18,
                  fontWeight: "bold",
                  width: 150,
                }}
              >
                <p>Đăng nhập</p>
              </Button>
            </Link>
            <Link to="/dang-ky" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  marginLeft: 15,
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 0,
                  backgroundColor: "#D9D9D9",
                  fontSize: 20,
                  height: 45,
                  width: 150,
                }}
              >
                <p>Đăng ký</p>
              </Button>
            </Link>
          </div>
          <img src={cry} style={{ marginBottom: 50 }} />
        </div>
      </div>
    </>
  );
}

export default NeedLogin;
