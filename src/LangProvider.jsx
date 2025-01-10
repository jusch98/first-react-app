import React, { createContext, useState } from "react";

// Crear el contexto
export const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LangContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
