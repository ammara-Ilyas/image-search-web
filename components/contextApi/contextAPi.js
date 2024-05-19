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
  const [lastPage, setLastPage] = useState(null);

  const fetchImage = async (pageToFetch = page) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${pageToFetch}&query=${query}&client_id=${apiKey}&per_page=10`
      );
      console.log("fetch");
      setData(response.data.results);

      const linkHeader = response.headers.link;
      if (linkHeader) {
        const lastPageUrl = extractLastPageUrl(linkHeader);
        if (lastPageUrl) {
          const urlParams = new URLSearchParams(new URL(lastPageUrl).search);
          const lastPageNum = urlParams.get("page");
          setLastPage(Number(lastPageNum));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const extractLastPageUrl = (linkHeader) => {
    const links = linkHeader.split(", ");
    const lastLink = links.find((link) => link.includes('rel="last"'));
    if (!lastLink) return null;
    const match = lastLink.match(/<([^>]+)>/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    fetchImage();
  }, [page]);

  console.log("page", page);
  console.log("lastPage", lastPage);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        setSelectedOption,
        selectedOption,
        fetchImage,
        page,
        setPage,
        lastPage,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
