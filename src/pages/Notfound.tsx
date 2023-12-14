import React, { useState } from "react";
import useUser from "../hooks/useUser";

function Notfound() {
  const [data, setdata] = useState();
  const user = useUser();
  function a() {
    console.log(user.data?.user_metadata);
  }

  return (
    <div>
      <button onClick={() => a()} style={{ paddingTop: 90 }}>
        a
      </button>
    </div>
  );
}

export default Notfound;
export {};
