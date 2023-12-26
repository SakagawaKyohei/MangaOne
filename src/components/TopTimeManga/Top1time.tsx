import { error } from "console";
import useGetMangaTop from "../../hooks/useGetTopManga";
import useGetChapter from "../../hooks/GetMangaInfo/useGetChapter";
import { Link } from "react-router-dom";

function Top1() {
  const top1 = useGetMangaTop(0);
  let ten = "";
  let avt = "";
  let view = 0;
  let id = "";
  let lastchapid = "";

  let lastchapname = "a";
  if (top1.isSuccess) {
    ten = top1.data.name;
    view = top1.data.view;
    avt = top1.data.biatruyen;
    console.log(avt);
    id = top1.data.id;
  }
  if (top1.isError) {
    console.log((top1.error as any).message);
  }

  const lastchapter = useGetChapter(id);
  lastchapname = lastchapter.data?.last1.name;
  lastchapid = lastchapter.data?.last1.id;
  return (
    <div>
      <Link to={`/noi-dung/${id}`}>
        <div
          className="toptimemanga top1"
          style={{ backgroundImage: `url(${avt})` }}
        >
          <p className="tieude">{ten}</p>
          <div className="chapterandview">
            <div className="chapter1">
              <Link to={`/doc-truyen/${id}/${lastchapid}`}>
                <p className="chaptertop" style={{ paddingBottom: 15 }}>
                  {lastchapname}
                </p>
              </Link>
            </div>

            <div className="view"></div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Top1;
export {};
