import React, { useState } from "react";
import { IoLogoGoogle } from "react-icons/io5";
import style from "./style.module.css";
import { SyncLoader } from "react-spinners";

export default function CustomButton({ txt, click, disabled, isErrLoading }) {

  return (
    <button
      onClick={() => click()}
      className={`${style.subBtn} ${isErrLoading ? style.loading : ""}`}
      disabled={isErrLoading || disabled}
    >
      {isErrLoading ? <SyncLoader color="#f27a1a" /> : txt}
    </button>
  );
}
