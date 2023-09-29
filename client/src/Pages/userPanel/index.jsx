import React, { useContext, useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { MyContext } from "../../Context";
import style from "./style.module.css";
import {
  IoNotificationsOutline,
  IoPersonOutline,
  IoTicketOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { Container } from "../../Components";

export default function Index() {
  const { user, load } = useContext(MyContext);
  const navigate = useNavigate();
  const { setIsModal } = useContext(MyContext);
  const [to, setTo] = useState("");

  useEffect(() => {
    if (load) {
      if (!user) {
        setTo("/");
        setIsModal(true);
      } else {
        setTo("profile");
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
            to={"profile"}
            className={`${style.link} link`}
          >
            <IoPersonOutline size={25} /> Profil
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#f27a1a" : "",
              };
            }}
            to={"tickets"}
            className={`${style.link} link`}
          >
            <IoTicketOutline size={25} /> Biletlərim
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#f27a1a" : "",
              };
            }}
            to={"payments"}
            className={`${style.link} link`}
          >
            <IoWalletOutline size={25} /> Ödənişlərim
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#f27a1a" : "",
              };
            }}
            to={"notfications"}
            className={`${style.link} link`}
          >
            <IoNotificationsOutline size={25} /> Bildirişlərim
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Container>
  );
}
