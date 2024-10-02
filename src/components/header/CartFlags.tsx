import "./CartFlags.scss";
import arrowDownWhite from "../../assets/images/arrowDownWhite.svg";
import cart from "../../assets/images/cart.png";
import czflag from "../../assets/images/czechFlag.svg";
import enflag from "../../assets/images/engFlag.svg";

import i18next from "i18next";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { changeLanguage } from "../../store/features/languageSlice";
import { closeMenu } from "../../store/features/hamburgerSlice";
import { useState, useRef, useEffect } from "react";

const CartFlags = () => {
  const currentLanguage = i18next.language;
  const hamburgerState = useAppSelector((state) => state.hamburger.isOpen);
  const dispatch = useAppDispatch();
  const [flagOpen, setFlagOpen] = useState<boolean>(false);

  const flagSelected = useRef<HTMLDivElement>(null);
  const flagNotSelected = useRef<HTMLDivElement>(null);

  const handleFlagOpen = () => {
    setFlagOpen((prev) => !prev);
  };

  const handleFlagClose = () => {
    setFlagOpen(() => false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      flagSelected.current &&
      !flagSelected.current.contains(event.target as Node) &&
      !flagNotSelected.current?.contains(event.target as Node)
    ) {
      setFlagOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className={`cart-account-flags ${hamburgerState ? "active" : ""}`}>
      <span className="cart-icon">
        <img src={cart} alt="Shopping basket icon" />
      </span>
      <p className="czk-dropdown">CZK</p>
      {currentLanguage === "cs" ? (
        <div className="flag-dropdown">
          <div
            ref={flagSelected}
            onClick={() => handleFlagOpen()}
            className="selected-flag"
          >
            <img src={czflag} alt="Czech flag" />
            <img src={arrowDownWhite} alt="Arrow down" />
          </div>
          <div
            ref={flagNotSelected}
            onClick={() => {
              dispatch(changeLanguage("en"));
              handleFlagClose();
              dispatch(closeMenu());
            }}
            className={`not-selected-flag ${flagOpen ? "active" : ""}`}
          >
            <img src={enflag} alt="GB Flag" />
            <span>EN</span>
          </div>
        </div>
      ) : currentLanguage === "en" ? (
        <div className="flag-dropdown">
          <div
            ref={flagSelected}
            onClick={() => handleFlagOpen()}
            className="selected-flag"
          >
            <img src={enflag} alt="GB flag" />
            <img src={arrowDownWhite} alt="Arrow down" />
          </div>
          <div
            ref={flagNotSelected}
            onClick={() => {
              dispatch(changeLanguage("cs"));
              handleFlagClose();
              dispatch(closeMenu());
            }}
            className={`not-selected-flag ${flagOpen ? "active" : ""}`}
          >
            <img src={czflag} alt="Czech flag" />
            <span>CZ</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartFlags;
