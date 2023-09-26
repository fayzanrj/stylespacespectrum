"use client";
import { StoreContext } from "@/context/Provider";
import React, { useContext } from "react";

const AddToCartBtn = ({ product }) => {
  const context = useContext(StoreContext);
  const {
    setCart,
    cart,
    setSubTotal,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
  } = context;

  const handleClick = () => {
    if (selectedColor && selectedSize) {
      setSubTotal((prev) => prev + product.productPrice);

      for (let i = 0; i < cart.length; i++) {
        if (
          cart[i].productId === product.productId &&
          cart[i].size === selectedSize &&
          cart[i].color === selectedColor
        ) {
          cart[i].quantity++;
          setCart([...cart]);
          setSelectedColor();
          setSelectedSize();
          return;
        }
      }

      const productToBuy = {
        productId: product.productId,
        productName: product.productName,
        productPrice: product.productPrice,
        productImg: product.productImg,
        quantity: 1,
        size: selectedSize,
        color: selectedColor,
      };
      setCart([...cart, productToBuy]);
      setSelectedColor();
      setSelectedSize();
    }
  };

  return (
    <button
      type="button"
      disabled={!selectedColor || !selectedSize}
      onClick={handleClick}
      className=" min-w-[6rem] p-[.3rem] bg-black text-white m-1 disabled:bg-stone-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
