import React, { useState } from "react";
import useUser from "../hooks/useUser";
import { Modal } from "antd";

function Notfound() {
  const [data, setdata] = useState();
  const user = useUser();
  function a() {
    console.log(user.data?.user_metadata);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={showModal} style={{ paddingTop: 90 }}>
        a
      </button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default Notfound;
export {};
