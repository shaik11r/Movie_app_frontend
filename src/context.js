import React, { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { loading, error, data: movies } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
    //passing to childern
  );
};
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider };
