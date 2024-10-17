import All from "./All";
import "./App.css";

import { useI18n } from "./useI18n";
import { I18nContext } from "./I18nContext";

function App() {
  const { t } = useI18n();

  return (
    <>
      <h1 className="App">{t("welcome")}</h1>
      <I18nContext.Provider value={t}>
        <All />
      </I18nContext.Provider>

      <p>Selected language is: {navigator.language}</p>
    </>
  );
}

export default App;
