import exp from "constants";
import React from "react";
import img from "D:/MangaOne/src/images/mangaimage.jpg";
import view from "D:/mangaone/src/images/view.png";

function Top1() {
  return (
    <div>
      <div className="toptimemanga top1">
        <p className="tieude">Tên truyện</p>
        <div className="chapterandview">
          <div className="chapter1">
            <p className="chaptertop" style={{ paddingBottom: 15 }}>
              Chapter 2
            </p>
          </div>
          <div className="view">
            <p className="luotxem">1234 lượt xem</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top1;
export {};
