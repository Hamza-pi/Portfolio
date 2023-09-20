import React from "react";

const Blur = ({ background = "#F2704E" }) => {
  return (
    <div
      style={{
        background: background,
        filter: "blur(101.5px)",
        width: "20rem",
        height: "20rem",
        position: "absolute",
        zIndex: 0
      }}
    />
  );
};

export default Blur;
