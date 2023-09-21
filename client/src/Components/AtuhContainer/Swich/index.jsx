import React from "react";
import style from "../style.module.css";

export default function Index({ setSwich, swich }) {
  return (
    <div className={style.switch}>
      <div
        onClick={() => {
          setSwich("LogIn");
          localStorage.setItem("swich", "LogIn");
        }}
        style={{ backgroundColor: swich === "SignIn" && "#dddddd" }}
        className={style.authLinks}
      >
        Giriş
      </div>

      <div
        onClick={() => {
          setSwich("SignIn");
          localStorage.setItem("swich", "SignIn");
        }}
        style={{ backgroundColor: swich === "LogIn" && "#dddddd" }}
        className={style.authLinks}
      >
        Qeydiyyat
      </div>
    </div>
  );
}
