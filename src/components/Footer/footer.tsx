import React, { useState } from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
function Footer() {
  const [p, setPath] = useState("");
  const loca = useLocation();
  React.useEffect(() => {
    // Google Analytics
    setPath(window.location.pathname);
  }, [loca]);
  return (
    <>
      {p == "/dang-nhap" || p == "/dang-ky" || p == "/quen-mat-khau" ? (
        <></>
      ) : (
        <div className="containerF">Footer</div>
      )}{" "}
    </>
  );
}

export default Footer;
export {};
