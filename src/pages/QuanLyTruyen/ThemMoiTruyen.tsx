import React from "react";
import Template from "./Template";
import { ThemMoiTruyenData } from "../Data/ComponentData";

function ThemMoiTruyen() {
  return (
    <div>
      <Template
        title={ThemMoiTruyenData.title}
        title1={ThemMoiTruyenData.title1}
        components={ThemMoiTruyenData.label}
      />
    </div>
  );
}

export default ThemMoiTruyen;
