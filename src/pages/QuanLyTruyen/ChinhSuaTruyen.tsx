import React from "react";
import Template from "./Template";
import { ChinhSuaTruyenData } from "../Data/ComponentData";

function ChinhSuaTruyen() {
  return (
    <div>
      <Template
        title={ChinhSuaTruyenData.title}
        title1={ChinhSuaTruyenData.title1}
        components={ChinhSuaTruyenData.label}
      />
    </div>
  );
}

export default ChinhSuaTruyen;
