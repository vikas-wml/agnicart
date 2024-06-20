"use client";

import { useContext, createContext } from "react";

async function getApiData() {
  try {
    const res = await fetch("");
    if (!res.ok) throw new Error("Something went wrong with fetching Api ");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.log(error.message);
    }
  }
}

const GlobalContext = createContext({});
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({ children }) => {
  const data = getApiData();
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
