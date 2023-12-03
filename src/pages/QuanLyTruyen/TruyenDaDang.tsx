import Template from "./Template";
import { TruyenDaDangData } from "../Data/ComponentData";

function TruyenDaDang() {
  return (
    <div>
      <Template
        title={TruyenDaDangData.title}
        title1={TruyenDaDangData.title1}
        components={TruyenDaDangData.label}
      />
    </div>
  );
}

export default TruyenDaDang;
export {};
