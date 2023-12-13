import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar1 from "./navbar1";
import Navbar2 from "./navbar2";
import useUser from "../../hooks/useUser";

function Navbar() {
  const [p, setPath] = useState("");
  const loca = useLocation();
  React.useEffect(() => {
    // Google Analytics
    setPath(window.location.pathname);
  }, [loca]);

  function renderSwitch(p: string) {
    switch (p) {
      case "/noi-dung":
        return <Navbar2 />;
      case "/dang-nhap":
        return <></>;
      case "/dang-ky":
        return <></>;
      case "/quen-mat-khau":
        return <></>;
      default:
        return (
          <>
            <Navbar1 />
          </>
        );
    }
  }
  return <>{renderSwitch(p)}</>;
}

export default Navbar;
function renderSwitch(param: any) {
  throw new Error("Function not implemented.");
}
