import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import Swich from "./Swich";
import Login from "./Login";
import SignIn from "./Signin";

export default function Index({ closeModal }) {
  const [swich, setSwich] = useState("Login");

  useEffect(() => {
    if (!localStorage.getItem("swich")) {
      localStorage.setItem("swich", "LogIn");
    } else {
      setSwich(localStorage.getItem("swich"));
    }
  }, [swich]);

  return (
    <>
      <div className={style.container} onClick={() => closeModal()}></div>
      <div className={style.box}>
        <Swich setSwich={setSwich} swich={swich} />
        <div>
          <p className={style.slogan}>
            <span>LOTAZ.COM </span> ilə sən də qazan !!!
          </p>

          {swich === "LogIn" && <Login />}

          {swich === "SignIn" && <SignIn />}
        </div>
      </div>
    </>
  );
}
