import { Button, Col, ConfigProvider, Input, Row } from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import useUpdateMetadata from "../../hooks/useUpdateMetadata";
import useUser from "../../hooks/useUser";
import { get } from "http";
import useResetPassword from "../../hooks/PasswordManagement/useResetPassword";
function UpAnh() {
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    return isJpgOrPng;
  };
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
}
const input: React.CSSProperties = {
  fontSize: 16,
  width: "100%",
  borderRadius: 0,
  display: "flex",
  flexDirection: "row",
};
const input2: React.CSSProperties = {
  fontSize: 16,
  width: "100%",
  borderRadius: 10,
  display: "flex",
  flexDirection: "row",
};

export const InputThemMoiChuong = [
  {
    title: "Tên chương",
    batbuoc: true,
    label: <Input style={input} placeholder="Tên chương"></Input>,
  },
  {
    label: (
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        directory
      >
        <Button icon={<UploadOutlined />}>Chọn thư mục</Button>
      </Upload>
    ),
  },
  {
    title: "Nội dung",
    batbuoc: true,
    label: (
      <TextArea
        style={{ height: 275, fontSize: 16 }}
        placeholder="Nội dung chương"
        disabled
      ></TextArea>
    ),
  },
  {
    label: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "#FF9040",
            color: "white",
            fontSize: 18,
            height: 38,
          }}
        >
          <p>Thêm mới</p>
        </Button>
      </div>
    ),
  },
];

export const InputThemMoiTruyen = [
  {
    title: "Tên truyện",
    batbuoc: true,
    label: <Input style={input} placeholder="Tên truyện"></Input>,
  },
  {
    title: "Bìa truyện",
    batbuoc: true,
    label: <UpAnh />,
  },
  {
    title: "Tên khác",
    batbuoc: false,
    label: <Input style={input} placeholder="Tên khác"></Input>,
  },
  {
    title: "Tác giả",
    batbuoc: false,
    label: <Input style={input} placeholder="Tác giả"></Input>,
  },
  {
    title: "Thể loại",
    batbuoc: true,
    label: (
      <Input style={input} placeholder="Nhập tên và chọn thể loại"></Input>
    ),
  },
  {
    title: "Tóm tắt truyện",
    batbuoc: true,
    label: <TextArea style={{ height: 175, fontSize: 16 }}></TextArea>,
  },
  {
    label: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "#FF9040",
            color: "white",
            fontSize: 18,
            height: 38,
          }}
        >
          <p>Thêm mới</p>
        </Button>
      </div>
    ),
  },
];

export const InputTruyenDaDang = [
  {
    title: "Tên truyện",
    batbuoc: true,
    label: <Input style={input} placeholder="Tên truyện"></Input>,
  },
  {
    title: "Bìa truyện",
    batbuoc: true,
    label: <UpAnh />,
  },
  {
    title: "Tên khác",
    batbuoc: false,
    label: <Input style={input} placeholder="Tên khác"></Input>,
  },
  {
    title: "Tác giả",
    batbuoc: false,
    label: <Input style={input} placeholder="Tác giả"></Input>,
  },
  {
    title: "Thể loại",
    batbuoc: true,
    label: (
      <Input style={input} placeholder="Nhập tên và chọn thể loại"></Input>
    ),
  },
  {
    title: "Tóm tắt truyện",
    batbuoc: true,
    label: <TextArea style={{ height: 175, fontSize: 16 }}></TextArea>,
  },
  {
    label: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "#FF9040",
            color: "white",
            fontSize: 18,
            height: 38,
          }}
        >
          <p>Thêm mới</p>
        </Button>
      </div>
    ),
  },
];

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

interface User {
  avt: string;
  ten: string;
  ho: string;
  sdt: string;
  stk: string;
  coin: number;
}

export function InputInfo() {
  const getu = useUser();
  const [ten, setten] = useState(getu.data?.user_metadata.ten);
  const [ho, setho] = useState(getu.data?.user_metadata.ho);
  const [sdt, setsdt] = useState(getu.data?.user_metadata.sdt);
  const [stk, setstk] = useState(getu.data?.user_metadata.stk);
  const [coin, setcoin] = useState(getu.data?.user_metadata.coin);
  const [avt, setavt] = useState(getu.data?.user_metadata.avt);
  const user = {
    ten: ten,
    ho: ho,
    sdt: sdt,
    stk: stk,
    coin: coin,
    avt: avt,
  };
  const updatemetadata = useUpdateMetadata(user);
  if (updatemetadata.isSuccess) {
    return <>tc</>;
  }
  if (updatemetadata.error) {
    return <>tb</>;
  }
  return (
    <>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={style2}>
              Email
              {false ? (
                <p style={{ color: "red", marginLeft: 5 }}>*</p>
              ) : (
                <p></p>
              )}
            </div>
          </Col>
          <Col span={24}>
            <Input style={input2} disabled value={getu.data?.email}></Input>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={style2}>
              Tên
              {true ? (
                <p style={{ color: "red", marginLeft: 5 }}>*</p>
              ) : (
                <p></p>
              )}
            </div>
          </Col>
          <Col span={24}>
            {" "}
            <Input
              style={input2}
              onChange={(e) => setten(e.target.value)}
              defaultValue={getu.data?.user_metadata.ten}
            ></Input>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={style2}>
              Họ
              {false ? (
                <p style={{ color: "red", marginLeft: 5 }}>*</p>
              ) : (
                <p></p>
              )}
            </div>
          </Col>
          <Col span={24}>
            <Input
              style={input2}
              onChange={(e) => setho(e.target.value)}
              defaultValue={getu.data?.user_metadata.ho}
            ></Input>
          </Col>
        </Row>
      </div>

      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={style2}>
              Điện thoại
              {false ? (
                <p style={{ color: "red", marginLeft: 5 }}>*</p>
              ) : (
                <p></p>
              )}
            </div>
          </Col>
          <Col span={24}>
            {" "}
            <Input
              style={input2}
              onChange={(e) => setsdt(e.target.value)}
              defaultValue={getu.data?.user_metadata.sdt}
            ></Input>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={style2}>
              Số tài khoản
              {false ? (
                <p style={{ color: "red", marginLeft: 5 }}>*</p>
              ) : (
                <p></p>
              )}
            </div>
          </Col>
          <Col span={24}>
            {" "}
            <Input
              style={input2}
              defaultValue={getu.data?.user_metadata.stk}
              onChange={(e) => setstk(e.target.value)}
            ></Input>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={style2}>
              {false ? (
                <p style={{ color: "red", marginLeft: 5 }}>*</p>
              ) : (
                <p></p>
              )}
            </div>
          </Col>
          <Col span={24}>
            {" "}
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 0,
                  backgroundColor: "#FF9040",
                  color: "white",
                  fontSize: 18,
                  height: 38,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
                onClick={() => updatemetadata.mutate()}
              >
                <p>Cập nhật</p>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
/* {
    title: "UserName",
    batbuoc: true,
    label: <Input style={input2} disabled></Input>,
  },

*/ //thêm user name sau

{
  /*  {
    title: "Tên",
    batbuoc: true,
    label: <Input style={input2}></Input>,
  },

  {
    title: "Họ",
    batbuoc: true,
    label: <Input style={input2}></Input>,
  },

  {
    title: "Điện thoại",
    batbuoc: false,
    label: <Input style={input2}></Input>,
  },
  {
    title: "Email",
    batbuoc: false,
    label: <Input style={input2}></Input>,
  },
  {
    title: "Số tài khoản",
    batbuoc: false,
    label: <Input style={input2}></Input>,
  },
  {
    label: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: "#FF9040",
            color: "white",
            fontSize: 18,
            height: 38,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <p>Cập nhật</p>
        </Button>
      </div>
    ),
  },
];
*/
}

export function InputChangePass() {
  const [password, setPassword] = useState("");
  const resetpassword = useResetPassword(password);
  if (resetpassword.isSuccess) {
    return <>a</>;
  }
  if (resetpassword.isError) {
    return <>{(resetpassword.error as any)?.message};</>;
  }
  return (
    <>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={style2}>
              Mật khẩu mới
              {true ? (
                <p style={{ color: "red", marginLeft: 5 }}>*</p>
              ) : (
                <p></p>
              )}
            </div>
          </Col>
          <Col span={24}>
            <Input
              style={input2}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={style2}>
              Xác nhận mật khẩu mới
              {true ? (
                <p style={{ color: "red", marginLeft: 5 }}>*</p>
              ) : (
                <p></p>
              )}
            </div>
          </Col>
          <Col span={24}>
            <Input style={input2}></Input>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row>
          <Col span={24}>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 0,
                  backgroundColor: "#FF9040",
                  color: "white",
                  fontSize: 18,
                  height: 38,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
                onClick={() => resetpassword.mutate()}
              >
                <p>Cập nhật</p>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
/*{
    title: "Mật khẩu hiện tại",
    batbuoc: true,
    label: <Input style={input2}></Input>,
  },*/
