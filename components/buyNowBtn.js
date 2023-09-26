"use client";
import { StoreContext } from "@/context/Provider";
import Link from "next/link";
import React, { memo, useContext } from "react";

const BuyNowBtn = ({ product }) => {
  const context = useContext(StoreContext);
  const {
    setCart,
    setSubTotal,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    setProgress
  } = context;

  const handleClick = () => {
    setProgress(40)
    const productToBuy = {
      productId: product.productId,
      productName: product.productName,
      productPrice: product.productPrice,
      productImg: product.productImg,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    };
    setSubTotal(product.productPrice)
    setCart([productToBuy]);
    setSelectedColor();
    setSelectedSize();
    setProgress(70)
  };

  return (
    <Link href="/checkout">
      <button
        type="button"
        disabled={!selectedColor || !selectedSize}
        onClick={handleClick}
        className=" min-w-[6rem] p-[.3rem] bg-black text-white m-1 disabled:bg-stone-300"
      >
        Buy Now
      </button>
    </Link>
  );
};

export default memo(BuyNowBtn);
