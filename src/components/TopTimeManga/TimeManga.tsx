import "./TimeManga.css";
import React from "react";
import img from "../../images/mangaimage.jpg";
import vieww from "../../images/view.png";
import useGetChapter from "../../hooks/GetMangaInfo/useGetChapter";
import useGetMangaTop from "../../hooks/useGetTopManga";
import { Link } from "react-router-dom";
interface Pros {
  keyy: number;
}

function TimeManga(pros: Pros) {
  const top1 = useGetMangaTop(pros.keyy);
  const top2 = useGetMangaTop(pros.keyy + 1);
  let ten = "";
  let avt = "";
  let view = 0;
  let id = "";
  let tenkhac = "";
  let lastchapid = "";

  let lastchapname = "a";
  if (top1.isSuccess) {
    ten = top1.data.name;
    view = top1.data.view;
    avt = top1.data.biatruyen;
    console.log(avt);
    id = top1.data.id;
    tenkhac = top1.data.other_name;
    if (tenkhac == "") {
      tenkhac = ten;
    }
  }
  if (top1.isError) {
    console.log((top1.error as any).message);
  }

  const lastchapter = useGetChapter(id);
  lastchapname = lastchapter.data?.last1.name;
  lastchapid = lastchapter.data?.last1.id;

  let ten1 = "";
  let avt1 = "";
  let view1 = 0;
  let id1 = "";
  let tenkhac1 = "";
  let lastchapid1 = "";

  let lastchapname1 = "a";
  if (top2.isSuccess) {
    ten1 = top2.data.name;
    view1 = top2.data.view;
    avt1 = top2.data.biatruyen;
    tenkhac1 = top2.data.other_name;
    console.log(avt);
    id1 = top2.data.id;
    if (tenkhac1 == "") {
      tenkhac1 = ten1;
    }
  }
  if (top2.isError) {
    console.log((top1.error as any).message);
  }

  const lastchapter1 = useGetChapter(id1);
  lastchapname1 = lastchapter1.data?.last1.name;
  lastchapid1 = lastchapter1.data?.last1.id;

  return (
    <div>
      <Link to={`/noi-dung/${id}`} style={{ color: "black" }}>
        <div className="toptimemanga chan">
          <div className="contentbox">
            <img src={avt} className="toptimemangaimage" />
            <div className="detail">
              <p style={{ paddingBottom: 33 }}>{ten}</p>
              <i
                style={{
                  paddingBottom: 33,
                  color: "rgba(0, 0, 0, 0.60)",
                  fontSize: 16,
                }}
              >
                {tenkhac}
              </i>
              {/*cần chỉnh align thay vì padding tay*/}
              <div className="chapter">
                <Link
                  style={{ paddingRight: 170 }}
                  className="linkhover"
                  to={`/doc-truyen/${id}/${lastchapid}`}
                >
                  {lastchapname}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to={`/noi-dung/${id1}`} style={{ color: "black" }}>
        <div className="toptimemanga le">
          <div className="contentbox">
            <img src={avt1} className="toptimemangaimage" />
            <div className="detail">
              <p style={{ paddingBottom: 33 }}>{ten1}</p>
              <i
                style={{
                  paddingBottom: 33,
                  color: "rgba(0, 0, 0, 0.60)",
                  fontSize: 16,
                }}
              >
                {tenkhac1}
              </i>
              {/*cần chỉnh align thay vì padding tay*/}
              <Link
                style={{}}
                className="linkhover"
                to={`/doc-truyen/${id1}/${lastchapid1}`}
              >
                <p style={{}}>{lastchapname1}</p>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TimeManga;
