import Template from "./Template";
import { TruyenDaDangData } from "../Data/ComponentData";
import useUser from "../../hooks/useUser";
import NeedLogin from "../NeedLogin";

function TruyenDaDang() {
  const user = useUser();
  if (user.data == null) {
    return <NeedLogin />;
  }
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
