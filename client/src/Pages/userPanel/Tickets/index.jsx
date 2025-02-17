import React, { useContext, useEffect, useState } from "react";
import style from "../style.module.css";
import { IoBagCheckOutline, IoWalletOutline } from "react-icons/io5";
import boxImage from "../../../assets/box.png";
import { Cards } from "../../../Components";
import axios from "axios";
import { MyContext } from "../../../Context";

export default function Index() {
  const [tickets, setTickets] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    const getSoldTickets = async () => {
      await axios(
        `https://lotaze.onrender.com/ticket/getSoldTickets/${user?.email}`
      )
        .then((res) => {
          setTickets(res.data.buyerTickets);
        })
        .catch((err) => setTickets([]));
    };

    getSoldTickets();
  }, []);

  return (
    <>
      {!tickets.length ? (
        <div className={style.profileCon}>
          <div className={style.title}>Biletlərim</div>

          <div className={style.paymentBox}>
            <img src={boxImage} />
            <h1>Sizin hələ biletiniz yoxdur</h1>
            <p>Bizi seçdiyiniz üçün təşəkkür edirik ! 😊</p>
            <button>Elə indi bilet al</button>
          </div>
        </div>
      ) : (
        <div className={style.cardCon}>
          <Cards haveticket={true} data={tickets} />
        </div>
      )}
    </>
  );
}
