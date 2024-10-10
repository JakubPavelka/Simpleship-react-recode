import zipcode from "../../../assets/images/zipcode.svg";
import city from "../../../assets/images/mesto.svg";
import reverse from "../../../assets/images/reverse.svg";

import { useTranslation } from "react-i18next";
import "./FromWhere.scss";

const FromWhere = () => {
  const { t } = useTranslation();
  return (
    <section className="from-where">
      <div className="inputs">
        <img className="reverse" src={reverse} alt="Šipky pro prohození zemí" />
        {/* ODKUD */}
        <div className="from">
          <h4>{t("From")}</h4>
          <select className="country-select" name="from" id="from">
            <option value="Česká republika">Česká republika</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Česká republika">Česká republika</option>
          </select>
          <div className="city-postal">
            <div className="city">
              <img className="input-icon" src={city} alt="City icon" />
              <input
                className="form-input-w-img"
                type="text"
                placeholder={t("CityPlaceholder")}
              />
            </div>
            <div className="postal">
              <img className="input-icon" src={zipcode} alt="ZIP icon" />
              <input
                className="form-input-w-img"
                type="text"
                placeholder={t("ZipPlaceholder")}
              />
            </div>
          </div>
        </div>
        {/* KAM */}
        <div className="where">
          <h4>{t("To")}</h4>
          <select className="country-select" name="to" id="to">
            <option value="Česká republika">Česká republika</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Česká republika">Česká republika</option>
          </select>
          <div className="city-postal">
            <div className="city">
              <img className="input-icon" src={city} alt="City icon" />
              <input
                className="form-input-w-img"
                type="text"
                placeholder={t("CityPlaceholder")}
              />
            </div>
            <div className="postal">
              <img className="input-icon" src={zipcode} alt="ZIP icon" />
              <input
                className="form-input-w-img"
                type="text"
                placeholder={t("ZipPlaceholder")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromWhere;
