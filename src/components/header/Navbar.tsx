import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/hamburger.svg";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleMenu, closeMenu } from "../../store/features/hamburgerSlice";
import { useEffect } from "react";
import CartFlags from "./CartFlags";

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const hamburgerState = useAppSelector((state) => state.hamburger.isOpen);

  // Kontrola pro zavření hamburgeru když je width > 961px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 961 && hamburgerState) {
        dispatch(closeMenu());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [hamburgerState]);
  // ****************************************************

  const handleHamburgerOpen = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <NavLink
            onClick={() => dispatch(closeMenu())}
            className="nav-link-logo"
            to="/"
          >
            <img src={logo} alt="Simpleship logo" />
          </NavLink>

          <div className={`nav-links ${hamburgerState ? "active" : ""}`}>
            <HashLink
              onClick={() => dispatch(closeMenu())}
              className="nav-link"
              smooth
              to="/#faq"
            >
              {t("FAQ")}
            </HashLink>
            <NavLink
              onClick={() => dispatch(closeMenu())}
              className="nav-link"
              to="contacts"
            >
              {t("Contact")}
            </NavLink>
          </div>

          <CartFlags />

          <div
            onClick={() => handleHamburgerOpen()}
            className={`hamburger ${hamburgerState ? "active" : ""}`}
          >
            <img src={hamburger} alt="hamburger icon" />
            <p>Menu</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
