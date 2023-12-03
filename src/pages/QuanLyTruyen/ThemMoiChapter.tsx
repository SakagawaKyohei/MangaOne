import React from "react";
import Template from "./Template";
import { ThemMoiChapterData } from "../Data/ComponentData";

function ThemMoiChapter() {
  return (
    <div>
      <Template
        title={ThemMoiChapterData.title}
        title1={ThemMoiChapterData.title1}
        components={ThemMoiChapterData.label}
      />
    </div>
  );
}

export default ThemMoiChapter;
