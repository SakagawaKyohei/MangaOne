import "./TimeManga.css";
import React from "react";
import img from "D:/MangaOne/src/images/mangaimage.jpg";
import view from "D:/mangaone/src/images/view.png";

function TimeManga() {
  return (
    <div>
      <div className="toptimemanga chan">
        <div className="contentbox">
          <img src={img} className="toptimemangaimage" />
          <div className="detail">
            <p style={{ paddingBottom: 33 }}>Tên truyện</p>
            <i
              style={{
                paddingBottom: 33,
                color: "rgba(0, 0, 0, 0.60)",
                fontSize: 16,
              }}
            >
              Tên khác
            </i>
            {/*cần chỉnh align thay vì padding tay*/}
            <div className="chapter">
              <p style={{ paddingRight: 170 }}>Chapter</p>
              <img src={view} style={{ paddingBottom: 4 }} />
              <p style={{ paddingLeft: 7 }}>100</p>
            </div>
          </div>
        </div>
      </div>
      <div className="toptimemanga le">
        <div className="contentbox">
          <img src={img} className="toptimemangaimage" />
          <div className="detail">
            <p style={{ paddingBottom: 33 }}>Tên truyện</p>
            <i
              style={{
                paddingBottom: 33,
                color: "rgba(0, 0, 0, 0.60)",
                fontSize: 16,
              }}
            >
              Tên khác
            </i>
            {/*cần chỉnh align thay vì padding tay*/}
            <div className="chapter">
              <p style={{ paddingRight: 170 }}>Chapter</p>
              <img src={view} style={{ paddingBottom: 4 }} />
              <p style={{ paddingLeft: 7 }}>100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeManga;
