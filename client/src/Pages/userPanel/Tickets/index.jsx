import React from "react";
import style from "../style.module.css";
import { IoBagCheckOutline, IoWalletOutline } from "react-icons/io5";
import boxImage from "../../../assets/box.png";
import { Cards } from "../../../Components";

export default function Index() {
  return (
    //     <div className={style.profileCon}>
    //       <div className={style.title}>Biletlərim</div>
    //
    //       <div className={style.paymentBox}>
    //         <img src={boxImage} />
    //         <h1>Sizin hələ biletiniz yoxdur</h1>
    //         <p>Bizi seçdiyiniz üçün təşəkkür edirik ! 😊</p>
    //         <button>Elə indi bilet al</button>
    //       </div>
    //     </div>
    <div className={style.cardCon}>

      <Cards haveticket={4}/>
    </div>
  );
}
