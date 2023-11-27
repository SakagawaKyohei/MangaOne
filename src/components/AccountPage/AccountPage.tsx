import React, { useState } from "react";
import "./AccountPage.css";
import { AccountbarData } from "./AccountbarData";

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
          <div style={{ marginLeft: "23%" }}>
            {item.icon}
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccountPage;
export {};
