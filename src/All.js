import { useContext } from "react";
import "./App.css";
import { I18nContext } from "./I18nContext";

function All() {
  const t = useContext(I18nContext);

  return (
    <>
      <h2 className="App">{t("everyone")}</h2>
    </>
  );
}

export default All;
