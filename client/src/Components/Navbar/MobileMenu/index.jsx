import React from "react";
import style from "../style.module.css";
import { IoCallOutline, IoCloseOutline, IoDocumentOutline, IoHelpOutline, IoInformation, IoWalletOutline } from "react-icons/io5";

export default function Index({ isMenu, setIsMenu }) {
  return (
    <div
      className={[style.mobileMenu]}
      style={{
        left: `${isMenu}%`,
      }}
    >
      <div className={style.close} onClick={() => setIsMenu(-100)}>
        <IoCloseOutline size={35} />
      </div>

      <div className={style.mobileMenuItem}>
        <IoInformation size={24} />
        <p>Haqqımızda</p>
      </div>
      <div className={style.mobileMenuItem}>
        <IoCallOutline size={19} />
        <p>Əlaqə</p>
      </div>
      <div className={style.mobileMenuItem}>
        <IoHelpOutline size={19} />
        <p>Yardım</p>
      </div>
      <div className={style.mobileMenuItem}>
        <IoWalletOutline size={19} />
        <p>Bank Hesab Nömrələri</p>
      </div>
      <div className={style.mobileMenuItem}>
        <IoDocumentOutline size={19} />
        <p>Qaydalar</p>
      </div>
    </div>
  );
}
