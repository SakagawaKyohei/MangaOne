import React from "react";
import "./MangaCart.css";
import mangaimage from "D:/MangaOne/src/images/mangaimage.jpg";

function MangaCart() {
  return (
    <div className="mangaitem">
      <img className="mangaimage" src={mangaimage} />
      <p className="mangaitemtitle">Manga name</p>
      <div className="chapterandtime">
        <div className="mangaitemchapter">
          <p>Chapter 1</p>
          <p>Chapter 1</p>
          <p>Chapter 1</p>
        </div>
        <div className="mangaitemtime">
          <p>1 giờ trước</p>
          <p>1 giờ trước</p>
          <p>1 giờ trước</p>
        </div>
      </div>
    </div>
  );
}

export default MangaCart;
