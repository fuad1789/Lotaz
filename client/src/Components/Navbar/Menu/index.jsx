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

export default function Index({ openModal, openProfile }) {
  const { user } = useContext(MyContext);

  return (
    <div className={style.menu}>
      <div className={style.menuItem}>
        <IoInformation size={24} />
        <p>Haqqımızda</p>
      </div>
      <div className={style.menuItem}>
        <IoCallOutline size={19} />
        <p>Əlaqə</p>
      </div>
      <div className={style.menuItem}>
        <IoHelpOutline size={19} />
        <p>Yardım</p>
      </div>
      <div className={style.menuItem}>
        <IoWalletOutline size={19} />
        <p>Bank Hesab Nömrələri</p>
      </div>
      {user ? (
        <div className={style.menuItem} onClick={() => openProfile()}>
          <IoPersonOutline style={{ fontWeight: 600 }} size={19} />
          <p style={{ fontWeight: 600 }}>{user.username} (0.00 AZN)</p>
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
