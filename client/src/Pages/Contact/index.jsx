import React from "react";
import style from "./style.module.css";
import { Container } from "../../Components";
import { IoCallOutline, IoMailOutline, IoMapOutline } from "react-icons/io5";
import TxtInput from "../../Components/AtuhContainer/TxtInput";

export default function Index() {
  return (
    <div>
      <Container className={style.contactContainer}>
        <div className={style.container}>
          <div className={style.header}>Əlaqə</div>
          <div className={style.contactBoxs}>
            <div className={style.box}>
              <div className={style.icon}>
                <IoMapOutline color="#f27a1a" />
              </div>
              <h1>Adress</h1>
              <p>Bakıdı məskənimiz ;)</p>
            </div>
            <div className={style.box}>
              <div className={style.icon}>
                <IoMailOutline color="#f27a1a" />
              </div>
              <h1>Email adress</h1>
              <p>fuadbagiyev@gmail.com</p>
            </div>
            <div className={style.box}>
              <div className={style.icon}>
                <IoCallOutline color="#f27a1a" />
              </div>
              <h1>Telefon</h1>
              <p>+994 555 55 55</p>
            </div>
          </div>

          <div className={style.contact}>
            <div className={style.contactForm}>
              <h1>Bizimlə əlaqə</h1>
              <TxtInput placeholder={"Adınız"} />
              <TxtInput placeholder={"Soyadınız"} />
              <TxtInput placeholder={"Email"} />
              <TxtInput placeholder={"Telefon"} />
              <textarea placeholder="Mesajınız"  rows="5"></textarea>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
