import React from "react";
import Search from "../components/Search/Search";

function Timkiemnangcao() {
  return (
    <div>
      {" "}
      <div style={{ marginLeft: 35, marginRight: 35 }}>
        <p style={{ fontSize: 0.01 }}>a</p>
        <p
          style={{
            fontSize: 30,
            textAlign: "center",
            marginBottom: 20,
            marginTop: 80,
          }}
        >
          Tìm kiếm nâng cao
        </p>
        <Search />
      </div>
    </div>
  );
}

export default Timkiemnangcao;
export {};
