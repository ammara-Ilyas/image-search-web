"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <AppContext.Provider
      value={{ data, setData, setSelectedOption, selectedOption }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
