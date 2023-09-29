import React from "react";
import style from "../style.module.css";
import { IoBagCheckOutline, IoWalletOutline } from "react-icons/io5";

export default function Index() {
  return (
    <div className={style.profileCon}>
      <div className={style.title}>Toplam statistika</div>

      <div className={style.boxs}>
        <div className={style.box}>
          <h1>Sifarişlər</h1>
          <div className={style.caunt}>
            <p>0</p>
            <span>əd</span>
          </div>
          <div className={style.icon}>
            <IoBagCheckOutline />
            <span>Toplam</span>
          </div>
        </div>
        <div className={style.box}>
          <h1>Balans</h1>
          <div className={style.caunt}>
            <p>0</p>
            <span>əd</span>
          </div>
          <div className={style.icon}>
            <IoWalletOutline />
            <span>Toplam</span>
          </div>
        </div>
      </div>
    </div>
  );
}
