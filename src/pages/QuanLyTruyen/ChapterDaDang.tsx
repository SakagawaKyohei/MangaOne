import React from "react";
import Template from "./Template";
import { ChapterDaDangData } from "../Data/ComponentData";

function ChapterDaDang() {
  return (
    <div>
      {" "}
      <Template
        title={ChapterDaDangData.title}
        title1={ChapterDaDangData.title1}
        components={ChapterDaDangData.label}
      />
    </div>
  );
}

export default ChapterDaDang;
