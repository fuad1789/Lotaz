import React from "react";
import style from "../style.module.css";
import {
  IoCallOutline,
  IoHelpOutline,
  IoInformation,
  IoPersonOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { MyContext } from "../../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/avatar.jpg";

export default function Index({ openModal, openProfile }) {
  const { user } = useContext(MyContext);

  return (
    <div className={style.menu}>
      <Link to={"/about"} className={`${style.menuItem} link`}>
        <IoInformation size={24} />
        <p>Haqqımızda</p>
      </Link>
      <Link to={"/contact"} className={`${style.menuItem} link`}>
        <IoCallOutline size={19} />
        <p>Əlaqə</p>
      </Link>
      <Link to={"/help"} className={`${style.menuItem} link`}>
        <IoHelpOutline size={19} />
        <p>Yardım</p>
      </Link>
      <Link to={"/banks/bankTransfer"} className={`${style.menuItem} link`}>
        <IoWalletOutline size={19} />
        <p>Bank Hesab Nömrələri</p>
      </Link>
      {user ? (
        <div className={`${style.avatarLink} link`} onClick={() => openProfile()}>
          <div className={style.avatar}>
            <img src={avatar} alt="profilePic" />
          </div>
        </div>
      ) : (
        <div onClick={() => openModal()} className={style.menuItem}>
          <IoPersonOutline size={19} />
          <p>Hesab Aç</p>
        </div>
      )}
    </div>
  );
}
