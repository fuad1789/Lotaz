import React from "react";
import style from "./style.module.css";
import { IoEyeOffOutline, IoEyeOutline, IoKeyOutline } from "react-icons/io5";
import { useState } from "react";

export default function Index({ placeholder, set, value }) {
  const [isSecret, setIsSecret] = useState(true);

  return (
    <div className={style.passInput}>
      <IoKeyOutline className={style.icon} size={24} />
      <input
        value={value}
        onChange={(e) => set(e.target.value)}
        type={isSecret ? "password" : "text"}
        placeholder={placeholder}
      />
      <span onClick={() => setIsSecret(!isSecret)}>
        {isSecret ? (
          <IoEyeOutline
            className={style.icon}
            size={27}
            style={{
              borderLeft: "1px solid #9CA0A0",
              cursor: "pointer",
              marginRight: "5px",
            }}
          />
        ) : (
          <IoEyeOffOutline
            className={style.icon}
            size={27}
            style={{
              borderLeft: "1px solid #9CA0A0",
              cursor: "pointer",
              marginRight: "5px",
            }}
          />
        )}
      </span>
    </div>
  );
}
