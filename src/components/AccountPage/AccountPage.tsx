import React, { useState } from "react";
import "./AccountPage.css";
import { AccountbarData } from "./AccountbarData";
import { Link } from "react-router-dom";

//lam position fixed nhung khong loi
interface Pros {
  i: number;
}

function AccountPage(pros: Pros) {
  return (
    <div>
      {AccountbarData.map((item, index) => (
        <Link
          to={item.path}
          className={index == pros.i ? "navbutton selected" : "navbutton"}
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
        </Link>
      ))}
    </div>
  );
}

export default AccountPage;
export {};
