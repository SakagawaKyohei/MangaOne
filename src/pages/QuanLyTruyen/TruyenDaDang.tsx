import Template from "./Template";
import { ThemMoiTruyenData } from "../Data/ComponentData";

function TruyenDaDang() {
  return (
    <div>
      {" "}
      <Template
        title={ThemMoiTruyenData.title}
        title1={ThemMoiTruyenData.title1}
        components={ThemMoiTruyenData.label}
      />
    </div>
  );
}

export default TruyenDaDang;
export {};
