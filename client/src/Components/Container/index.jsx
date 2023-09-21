import React from "react";
import style from "./style.module.css"

export default function Index(props) {
  return <div className={style.container}>{props.children}</div>;
}
