import React, { useEffect, useState } from "react";
import "./MangaCart.css";
import mangaimage from "../../images/mangaimage.jpg";
import useGetMangaByMID from "../../hooks/GetMangaInfo/useGetMangaByMID";
import useGetChapter from "../../hooks/GetMangaInfo/useGetChapter";
import { Link } from "react-router-dom";

interface manga {
  mangaid: string;
}

function MangaCart(pros: manga) {
  const manga = useGetMangaByMID(pros.mangaid);
  const chapter = useGetChapter(pros.mangaid);
  const [chapterdata, setchapterdata] = useState<any[]>([]);
  const [bia, setbia] = useState();
  const [ten, setten] = useState("");
  useEffect(() => {
    if (manga.data != null) {
      setbia(manga.data.biatruyen);
      setten(manga.data.name);
    }
  }, [manga]);
  useEffect(() => {
    if (chapter.data != null) {
      setchapterdata(chapter.data.last);
    }
  }, [chapter.data]);
  return (
    <div className="mangaitem">
      <Link to={`/noi-dung/${pros.mangaid}`}>
        <div
          style={{
            overflow: "hidden",
            width: "15vw",
            height: "23vw",
          }}
        >
          <img
            className="mangaimage"
            src={bia}
            onClick={() => {
              console.log(chapterdata);
            }}
          />
        </div>
      </Link>
      <Link to={`/noi-dung/${pros.mangaid}`} className="mangaitemtitle">
        <p>{ten}</p>
      </Link>

      {chapterdata.map((item) => (
        <div className="chapterandtime">
          <div className="mangaitemchapter">
            <Link
              to={`/doc-truyen/${pros.mangaid}/${item.id}`}
              className="mangaitemchapter"
            >
              <p>{item.name}</p>
            </Link>
          </div>
          <div className="mangaitemtime">
            <p>1 giờ trước</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MangaCart;
