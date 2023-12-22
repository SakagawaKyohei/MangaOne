import React, { useEffect, useState } from "react";
import "./MangaCart.css";
import mangaimage from "../../images/mangaimage.jpg";
import useGetMangaByMID from "../../hooks/GetMangaInfo/useGetMangaByMID";
import useGetChapter from "../../hooks/GetMangaInfo/useGetChapter";

interface manga {
  mangaid: string;
}

function MangaCart(pros: manga) {
  const manga = useGetMangaByMID(pros.mangaid);
  const chapter = useGetChapter(pros.mangaid, "chapterlist" + pros.mangaid);
  const [chaptername, setchaptername] = useState<any[]>([]);
  const [chapterid, setchapterid] = useState<string[]>([]);
  const [chaptertime, setchaptertime] = useState<string[]>([]);
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
      console.log(chapter.data.last);
      setchaptername(chapter.data.last);
    }
  }, [chapter.data]);
  return (
    <div className="mangaitem">
      <img
        className="mangaimage"
        src={bia}
        onClick={() => {
          console.log(chaptername);
        }}
      />
      <p className="mangaitemtitle">{ten}</p>

      {chaptername.map((item) => (
        <div className="chapterandtime">
          <div className="mangaitemchapter">
            <p>{item.name}</p>
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
