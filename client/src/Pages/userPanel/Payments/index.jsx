import React from "react";
import style from "../style.module.css";
import {
  IoCashOutline,
} from "react-icons/io5";
import paymentImage from "../../../assets/payment.png";

export default function Index() {
  return (
    <>
      <div className={style.profileCon}>
        <div className={style.title}>Ödənişlərim</div>

        <div className={style.paymentBox}>
          <img src={paymentImage} />
          <h1>Sizin hələ ödənişiniz yoxdur</h1>
          <p>Bizi seçdiyiniz üçün təşəkkür edirik ! 😊</p>
          <button>Elə indi ödəniş edin</button>
        </div>
      </div>
      <div className={style.paymentCon}>
        <div className={style.title}>Ödənişlərim</div>
        <div className={style.paymentItem}>
          <h1>
            <IoCashOutline size={30} color="#85bb65" /> Balans artımı (10 AZN)
          </h1>
          <button>gözleyir...</button>
        </div>
        <div className={style.paymentItem}>
          <h1>
            <IoCashOutline size={30} color="#85bb65" /> Balans artımı (10 AZN)
          </h1>
          <button>gözleyir...</button>
        </div>
        <div className={style.paymentItem}>
          <h1>
            <IoCashOutline size={30} color="#85bb65" /> Balans artımı (10 AZN)
          </h1>
          <button>gözleyir...</button>
        </div>
        <div className={style.paymentItem}>
          <h1>
            <IoCashOutline size={30} color="#85bb65" /> Balans artımı (10 AZN)
          </h1>
          <button>gözleyir...</button>
        </div>
      </div>
    </>
  );
}
