import React from "react";
import style from "../style.module.css";
import {
  IoBagCheckOutline,
  IoNotificationsOutline,
  IoWalletOutline,
} from "react-icons/io5";
import bellImage from "../../../assets/bell.png";

export default function Index() {
  return (
    <>
      <div className={style.profileCon}>
        <div className={style.title}>Bildirişlərim</div>

        <div className={style.paymentBox}>
          <img src={bellImage} />
          <h1>Sizin hələ bildirişiniz yoxdur yoxdur</h1>
          <p>Bizi seçdiyiniz üçün təşəkkür edirik ! 😊</p>
          <button>Ana səhifəyə geri dön</button>
        </div>
      </div>
      <div className={style.paymentCon}>
        <div className={style.title}>Ödənişlərim</div>
        <div className={style.paymentItem}>
          <h1>Balans artımı (10 AZN)</h1>
          <IoNotificationsOutline size={20} />
        </div>
        <div className={style.paymentItem}>
          <h1>
            Təbrikər siz qatıldığınız lotereyadan bir ədəd telefon qazandınız 🎉
          </h1>
          <IoNotificationsOutline size={20} />
        </div>
        <div className={style.paymentItem}>
          <h1>Balans artımı (10 AZN)</h1>
          <IoNotificationsOutline size={20} />
        </div>
        <div className={style.paymentItem}>
          <h1>Balans artımı (10 AZN)</h1>
          <IoNotificationsOutline size={20} />
        </div>
      </div>
    </>
  );
}
