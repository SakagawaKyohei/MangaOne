import React from "react";
import mangaimage from "/MangaOne/src/images/mangaimage.jpg";

function NoiDungTruyen() {
  return (
    <div>
      <div style={{ height: "40vh" }}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.40)",
            width: "100vw",
            height: "40vh",
            position: "absolute",

            zIndex: 1,
          }}
        />
        <div className="biatruyen" />
      </div>
      <div style={{ marginLeft: 35, marginRight: 35 }}></div>
    </div>
  );
}

export default NoiDungTruyen;
