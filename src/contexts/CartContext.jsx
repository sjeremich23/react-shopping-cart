import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = props => {
  const { children } = props;
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return <CartContext.Provider value={[cart, addItem]}>{children}</CartContext.Provider>;
};
