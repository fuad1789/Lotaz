import React from "react";
import style from "../style.module.css";
import {
  IoCallOutline,
  IoCloseOutline,
  IoDocumentOutline,
  IoHelpOutline,
  IoInformation,
  IoWalletOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

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

      <Link
        to={"/about"}
        className={`${style.mobileMenuItem} link`}
        onClick={() => setIsMenu(-100)}
      >
        <IoInformation size={24} />
        <p>Haqqımızda</p>
      </Link>
      <Link
        to={"/contact"}
        className={`${style.mobileMenuItem} link`}
        onClick={() => setIsMenu(-100)}
      >
        <IoCallOutline size={19} />
        <p>Əlaqə</p>
      </Link>
      <Link
        to={"/help"}
        className={`${style.mobileMenuItem} link`}
        onClick={() => setIsMenu(-100)}
      >
        <IoHelpOutline size={19} />
        <p>Yardım</p>
      </Link>
      <Link
        to={"banks/banktransfer"}
        className={`${style.mobileMenuItem} link`}
        onClick={() => setIsMenu(-100)}
      >
        <IoWalletOutline size={19} />
        <p>Bank Hesab Nömrələri</p>
      </Link>
    </div>
  );
}
