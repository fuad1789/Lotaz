import React from "react";
import style from "../style.module.css";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Link to={"/"} className={`${style.logo} link`}>
      <h1>Lotaz</h1>
      <h3>Şanslı lotereya</h3>
    </Link>
  );
}
