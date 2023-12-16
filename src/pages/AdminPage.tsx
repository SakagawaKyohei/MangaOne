import { Button, Input } from "antd";
import React, { useState } from "react";
import useDeleteUser from "../hooks/LoginSystem/useDeleteUser";

function AdminPage() {
  const [userid, setuserid] = useState("");
  const dele = useDeleteUser(userid);
  if (dele.isSuccess) {
    return <>Thành công</>;
  }
  if (dele.isError) {
    return <>{(dele.error as any).message}</>;
  }
  
  return (
    <>
      <div
        style={{
          marginLeft: 35,
          marginRight: 35,
        }}
      >
        <p style={{ fontSize: 0.01, paddingBottom: 90 }}>.</p>{" "}
        {/*collision tăng chiều cao cho div*/}
        <div>
          <Input onChange={(e) => setuserid(e.target.value)} />
          <Button onClick={() => dele.mutate()}>Xóa người dùng</Button>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
