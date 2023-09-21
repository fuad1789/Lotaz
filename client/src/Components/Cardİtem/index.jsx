import React, { useState } from "react";
import style from "./style.module.css";
export default function Index() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.priceInfo}>
        <div>
          <p>Məhsulun dəyəri</p>
          <span>3.308.431 AZN</span>
        </div>
        <div className={style.piece}>1 ədəd</div>
      </div>
      <div className={style.img}>
        <img src="https://cdn.dsmcdn.com/digital-services/personal/prod/bfb62874-2546-4b01-9779-a39c99010b8f.png" />
      </div>
      <div className={style.priceAndTitle}>
        <p className={style.title}>Skoda Superb 2.0 TSI 280 PS</p>
        <p className={style.price}>13.5 AZN</p>
      </div>
      <div className={style.time}>Lotereya Tarixi: 09:11:2023</div>
      <div className={style.interestContainer}>
        <p>
          Satılan: <span> %23</span>
        </p>
        <div className={style.bar}>
          <div className={style.barLine}></div>
        </div>
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
          style={{
            backgroundColor: count == 0 ? "transparent" : "#f27a1a",
            border: "1px solid #f27a1a",
            color: count == 0 ? "#f27a1a" : "#ffffff",
            fontSize: "1em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "6px",
            cursor: "pointer",
            width: "100%",
            transition: "all 0.4s",
          }}
        >
          Bilet Al
        </button>
      </div>
    </div>
  );
}
