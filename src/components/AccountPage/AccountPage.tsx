import React, { useState } from "react";
import "./AccountPage.css";
import { AccountbarData } from "./AccountbarData";

//lam position fixed nhung khong loi

function AccountPage() {
  const handleclick = (i: number) => {
    seti(i);
  };
  const [i, seti] = useState(0);
  return (
    <div>
      {AccountbarData.map((item, index) => (
        <div
          className={index == i ? "navbutton seleted" : "navbutton"}
          onClick={() => handleclick(index)}
        >
          <div
            style={{
              marginLeft: "23%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {item.icon}
            <p style={{ fontSize: 16 }}>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccountPage;
export {};
