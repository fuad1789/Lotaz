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
import { Link, useNavigate } from "react-router-dom";
import formatNumber from "../../../utils/formatNumber";

export default function Index({ top, closeProfile }) {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
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
          <p>{formatNumber(user?.wallet)} AZN</p>
          <button>Yüklə</button>
        </div>
        <div className={style.TicketBox}>
          <h1>Bilet</h1>
          <p>0</p>
          <button>Al</button>
        </div>
      </div>
      <div className={style.links}>
        <Link
          to={"user/profile"}
          className={`${style.link} link`}
          onClick={() => closeProfile()}
        >
          <IoPersonOutline size={19} />
          <p>Profilim</p>
        </Link>
        <Link
          to={"user/tickets"}
          className={`${style.link} link`}
          onClick={() => closeProfile()}
        >
          <IoTicketOutline size={19} />
          <p>Biletlərim</p>
        </Link>
        <Link
          to={"user/payments"}
          className={`${style.link} link`}
          onClick={() => closeProfile()}
        >
          <IoWalletOutline size={19} />
          <p>Ödənişlərim</p>
        </Link>
        <Link
          to={"user/notfications"}
          className={`${style.link} link`}
          onClick={() => closeProfile()}
        >
          <IoNotificationsOutline size={19} />
          <p>Bildirişlərim</p>
        </Link>
        <button className={style.link} onClick={() => logout()}>
          <IoExitOutline size={19} />
          <p>Hesabdan çıxış</p>
        </button>
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
