import React from "react";
import style from "./style.module.css";
import avatar from "../../../assets/avatar.jpg";
import {
  IoExitOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoTicketOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { MyContext } from "../../../Context";
import { useContext } from "react";

export default function Index({ top, closeProfile }) {
  const { user } = useContext(MyContext);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={style.container} style={{ top: `${top}px` }}>
      <div className={style.userInfo}>
        <img src={avatar} alt="profilePic" />
        <section>
          <h1>{user?.username}</h1>
          <p>{user?.email}</p>
        </section>
      </div>
      <div className={style.walletAndTicket}>
        <div className={style.walletBox}>
          <h1>Balans</h1>
          <p>0.00 AZN</p>
          <button>Yüklə</button>
        </div>
        <div className={style.TicketBox}>
          <h1>Bilet</h1>
          <p>0</p>
          <button>Al</button>
        </div>
      </div>
      <div className={style.links}>
        <div className={style.link}>
          <IoPersonOutline size={19} />
          <p>Profilim</p>
        </div>
        <div className={style.link}>
          <IoTicketOutline size={19} />
          <p>Biletlərim</p>
        </div>
        <div className={style.link}>
          <IoWalletOutline size={19} />
          <p>Ödənişlərim</p>
        </div>
        <div className={style.link}>
          <IoNotificationsOutline size={19} />
          <p>Bildirişlərim</p>
        </div>
        <div className={style.link} onClick={() => logout()}>
          <IoExitOutline size={19} />
          <p>Hesabdan çıxış</p>
        </div>
      </div>
      {top == 50 && (
        <div
          onClick={() => closeProfile()}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
}
