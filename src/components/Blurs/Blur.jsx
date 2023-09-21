import React from "react";

const Blur = ({ background = "#F2704E",width="20rem",height='20rem',blur="101.5px" }) => {
  return (
    <div
      style={{
        background: background,
        filter: `blur(${blur})`,
        width: width,
        height: height,
        position: "absolute",
        zIndex: 0
      }}
    />
  );
};

export default Blur;
