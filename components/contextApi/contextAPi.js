"use client";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();
const apiKey = "VG4HY3iiinchcwaxgyEpZ7A7ogG81UOWZkdV0GomubM";

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("Book");
  const [selectedOption, setSelectedOption] = useState("3");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}&per_page=10`
        );
        console.log("fetch");
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [page]);
  console.log("pa", page);
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        setSelectedOption,
        selectedOption,
        page,
        query,
        setQuery,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
