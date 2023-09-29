import React from "react";
import { HashLoader, BeatLoader } from "react-spinners";

export default function Index() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <BeatLoader
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        size={50}
        color="#F27A1A"
      />
    </div>
  );
}
