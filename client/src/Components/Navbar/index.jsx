import React, { useState } from "react";
import style from "./style.module.css";
import AuthContainer from "../AtuhContainer";
import useWindowSize from "../../Hooks/useWindowsSize";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenuLinks from "./MobileMenuLinks";
import MobileMenu from "./MobileMenu";
import ProfileMenu from "./ProfileMenu";



export default function Index() {
  const [isMenu, setIsMenu] = useState(-100);
  const [top, setTop] = useState(-600);
  const [isModal, setIsModal] = useState(false);
  const windowDimensions = useWindowSize();

  const openModal = () => {
    setIsModal(true);
    document.body.style.overflowY = "hidden";
  };
  const closeModal = () => {
    setIsModal(false);
    document.body.style.overflowY = "auto";
  };
  const openProfile = () => {
    setTop(50);
  };
  const closeProfile = () => {
    setTop(-600);
  };

  return (
    <>
      <div className={style.container}>
        <Logo />
        {windowDimensions.width > 750 ? (
          <Menu openModal={openModal} openProfile={openProfile} />
        ) : (
          <MobileMenuLinks
            openModal={openModal}
            setIsMenu={setIsMenu}
            openProfile={openProfile}
          />
        )}
        <MobileMenu isMenu={isMenu} setIsMenu={setIsMenu} />
        <ProfileMenu top={top} closeProfile={closeProfile} />
      </div>
      {isModal && <AuthContainer closeModal={closeModal} />}

    </>
  );
}
