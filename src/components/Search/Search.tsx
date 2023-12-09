import React from "react";
import "./Search.css";
import {
  Col,
  Row,
  Input,
  Checkbox,
  ConfigProvider,
  Select,
  Button,
  Flex,
} from "antd";
import { Link } from "react-router-dom";

//chuyển sang component
function Search() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF9040",
          controlInteractiveSize: 20,
          borderRadius: 0,
          controlHeight: 43,
          fontSize: 18,
          /* here is your global tokens */
        },
        components: {
          Select: {
            optionFontSize: 16,
          },
        },
      }}
    >
      <div>
        <p style={{ fontSize: 20, paddingBottom: 10 }}>Tên truyện cần tìm</p>
        <Input
          className="bgo"
          placeholder="Có thể để trống"
          type="text"
        ></Input>
        <p style={{ fontSize: 20, paddingBottom: 10 }}>
          Tên tác giả của truyện cần tìm
        </p>
        <Input
          className="bgo"
          placeholder="Có thể để trống"
          type="text"
        ></Input>
        <p style={{ fontSize: 20, paddingBottom: 10 }}>
          Tên họa sĩ của truyện cần tìm
        </p>
        <Input
          className="bgo"
          placeholder="Có thể để trống"
          type="text"
        ></Input>
        <p style={{ fontSize: 20, paddingBottom: 0, paddingTop: 10 }}>
          Thể loại truyện cần tìm
        </p>
        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <Row style={{ padding: 15, paddingLeft: 0 }}>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox style={{ fontSize: 18 }}> Thể loại</Checkbox>
          </Col>
        </Row>

        <p style={{ fontSize: 20, paddingBottom: 5, paddingTop: 20 }}>
          Cách xếp truyện
        </p>
        <div
          style={{
            padding: 15,
            paddingLeft: 0,
            paddingBottom: 30,
            width: "100%",
          }}
        >
          <Row>
            <Col span={5}>
              <Select
                defaultValue="Vừa cập nhật"
                style={{ width: "100%", borderRadius: 0 }}
                options={[
                  { value: "vuacapnhat", label: "Vừa cập nhật" },
                  { value: "cunhat", label: "Cũ nhất" },
                  { value: "haynhat", label: "Đánh giá cao nhất" },
                  { value: "tenhat", label: "Đánh giá thấp nhất" },
                  { value: "theodoinhieunhat", label: "Theo dõi nhiều nhất" },
                  { value: "theodoiitnhat", label: "Theo dõi ít nhất" },
                ]}
              />
            </Col>
            {/*cần chỉnh lại button đa màn hình*/}
            <Col offset={15} span={3}>
              <Link to="/ket-qua">
                <Button
                  style={{
                    backgroundColor: "#FF9040",
                    color: "white",
                    width: "80%",
                    borderRadius: 0,
                  }}
                >
                  Tìm truyện
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Search;
