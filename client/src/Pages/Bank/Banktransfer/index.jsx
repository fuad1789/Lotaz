import React from "react";
import style from "./style.module.css";

export default function Index() {
  return (
    <div className={style.cards}>
      <div className={style.title}>Sayt Hesabları</div>
      <div className={style.card}>
        <img src="https://dolphgame.com/storage/methods/eTrU2YoOBPwwGyEkB4Xd5Tjf8hr1QKoWZtUImubs.png" />
        <div className={style.rightBar}>
          <div className={style.item}>
            <h1>Bankın adı</h1> <p>MilliÖN</p>
          </div>
          <div className={style.item}>
            <h1>Kart Nömrəsi</h1> <p>+994 55 555 55 55</p>
          </div>
          <div className={style.item}>
            <h1>Hesab Sahibi</h1> <p>Lotaz.com</p>
          </div>
          <div className={`${style.item} ${style.btn}`}>Ödəmə bildir</div>
        </div>
      </div>
    </div>
  );
}
