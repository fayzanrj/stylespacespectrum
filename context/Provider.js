"use client";
import { createContext, useState } from "react";

export const StoreContext = createContext();

export function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [selectedSize, setSelectedSize] = useState()
  const [selectedColor, setSelectedColor] = useState()
  const [order , setOrder] = useState()
  const [adminLoggedIn , setAdminLoggedIn] = useState(true)
  const [progress , setProgress] = useState(0)

  return (
    <StoreContext.Provider
      value={{cart, setCart, subTotal, setSubTotal, order , setOrder , adminLoggedIn , setAdminLoggedIn , selectedSize, setSelectedSize , selectedColor,progress , setProgress, setSelectedColor}}
    >
      {children}
    </StoreContext.Provider>
  );
}
