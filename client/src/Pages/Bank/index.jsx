import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { MyContext } from "../../Context";
import style from "./Banktransfer/style.module.css";
import { IoAddCircleOutline, IoAlertCircleOutline } from "react-icons/io5";
import { Container } from "../../Components";

export default function Index() {
  const { user, load } = useContext(MyContext);
  const { setIsModal } = useContext(MyContext);
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (load) {
      if (!user) {
        setTo("/");
        setIsModal(true);
      } else {
        setTo("bankTransfer");
      }
    }
  }, [user, navigate, load]);

  return (
    <Container className={style.BankContainer}>
      <Navigate to={to} />
      <div className={style.container}>
        <div className={style.header}>Balansı artır</div>
        <div className={style.links}>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#f27a1a" : "",
              };
            }}
            to={"banktransfer"}
            className={`${style.link} link`}
          >
            <IoAddCircleOutline size={25} /> Balansı artır
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#f27a1a" : "",
              };
            }}
            to={"help"}
            className={`${style.link} link`}
          >
            <IoAlertCircleOutline size={25} /> Balansı necə artıra bilərəm
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Container>
  );
}
