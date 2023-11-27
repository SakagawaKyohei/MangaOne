import { Button, ConfigProvider, Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
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
    <ConfigProvider
      theme={{
        token: {
          /* here is your global tokens */
          colorPrimary: "#FF9040",
        },
      }}
    >
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
    </ConfigProvider>
  );
}
const input: React.CSSProperties = {
  fontSize: 16,
  borderRadius: 0,
  display: "flex",
  flexDirection: "row",
};

export const InputData = [
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
            height: 40,
          }}
        >
          <p>Thêm mới</p>
        </Button>
      </div>
    ),
  },
];
