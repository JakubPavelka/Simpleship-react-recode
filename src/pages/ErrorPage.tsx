import "./ErrorPage.scss";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <section className="error-page">
      <h2>{t("ErrorH2")}</h2>
      <p>{t("ErrorP")}</p>
      <div className="error-buttons">
        <button>{t("ErrorHome")}</button>
        <button>{t("ErrorContacts")}</button>
      </div>
    </section>
  );
};

export default ErrorPage;
