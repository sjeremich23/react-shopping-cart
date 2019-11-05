import React, { useState, createContext } from "react";
import data from "../data/data";

export const ProductContext = createContext();

export const ProductContextProvider = props => {
  const { children } = props;
  const [products] = useState(data);

  return <ProductContext.Provider value={[products]}>{children}</ProductContext.Provider>;
};
