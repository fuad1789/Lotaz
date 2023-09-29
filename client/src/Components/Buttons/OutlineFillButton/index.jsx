import React from "react";
import style from "./style.module.css";

export default function Index({ txt, isOutline = false, color = "#F27A1A" }) {
  const fill = {
    fontSize: "0.9em",
    minHeight: "2.3em",
    padding: "0 32px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#F27A1A",
    color: "#fff",
  };
  const outline = {
    fontSize: "0.9em",
    minHeight: "2.3em",
    padding: "0 25px",
    borderRadius: "10px",
    border: `1px solid ${color}`,
    color: color,
    transition: "all 0.5s",
    cursor: "pointer",
  };

  return <button style={isOutline ? outline : fill}>{txt}</button>;
}
