import "./Header.scss";
import Navbar from "./Navbar";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Navbar />
      <div className="container under-nav">
        <p>
          {t("WeSimplyConnectThe")}
          <span>{t("world")}</span>.
        </p>
      </div>
    </header>
  );
};

export default Header;
