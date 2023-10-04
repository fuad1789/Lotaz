import React, { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import calculateInterest from "../../utils/calculateInterest";
import axios from "axios";
import { MyContext } from "../../Context";
import { SyncLoader } from "react-spinners";
import { toast } from "react-hot-toast";
export default function Index({
  haveticket,
  productPrice,
  productCount,
  createdAt,
  img,
  ticketPrice,
  title,
  ticketCount,
  soldTicketCount,
  buyers,
  id,
}) {
  const { user } = useContext(MyContext);
  const [count, setCount] = useState(0);
  const [isloading, setIsloading] = useState(false);
  const [xticketCount, setTicketCount] = useState(ticketCount);
  const [xsoldTicketCount, setSoldTicketCount] = useState(soldTicketCount);
  const [haveTicketCount, setHaveTicketCount] = useState(0);

  const [interest, setInterest] = useState(
    calculateInterest(xticketCount, xsoldTicketCount)
  );

  const increase = () => {
    if (count >= xticketCount - xsoldTicketCount) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const buyTicket = async () => {
    try {
      setIsloading(true);
      await axios
        .put("https://lotaze.onrender.com/ticket/buyTicket", {
          count,
          email: user?.email,
          id,
        })
        .then((res) => {
          setInterest(
            calculateInterest(
              res.data.ticket.ticketCount,
              res.data.ticket.soldTicketCount
            )
          );
          setCount(0);
          setTicketCount(res.data.ticket.ticketCount);
          setSoldTicketCount(res.data.ticket.soldTicketCount);
        })
        .catch((res) => {
          toast.error(res.response.data.message);
          setInterest(
            calculateInterest(
              res.response.data.ticket.ticketCount,
              res.response.data.ticket.soldTicketCount
            )
          );
          setCount(0);
          setTicketCount(res.response.data.ticket.ticketCount);
          setSoldTicketCount(res.response.data.ticket.soldTicketCount);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    setInterest(calculateInterest(xticketCount, xsoldTicketCount));
    console.log(interest);
    buyers.map(
      (buyer) => buyer.user == user?.email && setHaveTicketCount(buyer.count)
    );
  }, [xticketCount, xsoldTicketCount]);

  return (
    <div
      className={style.container}
      style={{
        opacity: xticketCount == xsoldTicketCount && "0.4",
        pointerEvents: xticketCount == xsoldTicketCount && "none",
      }}
    >
      <div className={style.priceInfo}>
        <div>
          <p>Məhsulun dəyəri</p>
          <span>{productPrice} AZN</span>
        </div>
        <div className={style.piece}>{productCount} ədəd</div>
      </div>
      <div className={style.img}>
        <img src={img} />
      </div>
      <div className={style.priceAndTitle}>
        <p className={style.title}>{title}</p>
        <p className={style.price}>{ticketPrice} AZN</p>
      </div>
      <div className={style.time}>Lotereya Tarixi: {createdAt}</div>
      <div className={style.interestContainer}>
        <p>
          Satılan: <span> %{interest}</span>
        </p>
        <div className={style.bar}>
          <div
            style={{ width: `${interest}%` }}
            className={style.barLine}
          ></div>
        </div>
        {haveticket ? (
          <button
            style={{
              backgroundColor: "#15af15",
              color: "#ffffff",
              fontSize: "1em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              padding: "6px",
              cursor: "pointer",
              width: "100%",
              transition: "all 0.4s",
              marginTop: "20px",
            }}
          >
            {haveTicketCount} bilet
          </button>
        ) : (
          <>
            <div className={style.interest}>
              <div className={style.decrease} onClick={() => decrease()}>
                <p>-</p>
              </div>
              <div className={style.caunt}>{count}</div>
              <div className={style.increase} onClick={() => increase()}>
                <p>+</p>
              </div>
            </div>
            <button
              onClick={() => buyTicket()}
              disabled={count <= 0}
              style={{
                backgroundColor: count == 0 ? "transparent" : "#f27a1a",
                border: "1px solid #f27a1a",
                color: count == 0 ? "#f27a1a" : "#ffffff",
                fontSize: "1em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                height: "2.2em",
                cursor: "pointer",
                width: "100%",
                transition: "all 0.4s",
              }}
            >
              {isloading ? <SyncLoader color="#fff" /> : "Bilet Al"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
