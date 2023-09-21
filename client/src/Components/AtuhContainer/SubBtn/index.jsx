import React, { useState } from "react";
import { IoLogoGoogle } from "react-icons/io5";
import style from "./style.module.css";
import { SyncLoader } from "react-spinners";

export default function CustomButton({ txt, click, disabled, isErrLoading }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    if (!isLoading) {
      setIsLoading(true);
      click();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
    }
  };

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
