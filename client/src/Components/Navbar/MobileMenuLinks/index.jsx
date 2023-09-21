import React from "react";
import style from "../style.module.css";
import { IoMenu, IoPersonOutline } from "react-icons/io5";
import avatar from "../../../assets/avatar.jpg";
import { MyContext } from "../../../Context";
import { useContext } from "react";

export default function Index({ openModal, setIsMenu, openProfile }) {
  const { user } = useContext(MyContext);
  return (
    <div className={style.mobileMenuLinks}>
      <div onClick={() => setIsMenu(0)}>
        <IoMenu size={30} />
      </div>
      {user ? (
        <div onClick={() => openProfile()}>
          <img
            width={45}
            height={45}
            style={{ borderRadius: "50%" }}
            src={avatar}
            alt="avatar"
          />
        </div>
      ) : (
        <div onClick={() => openModal()}>
          <IoPersonOutline size={25} />
        </div>
      )}
    </div>
  );
}
