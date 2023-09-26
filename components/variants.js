"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/variants.module.css";
import { StoreContext } from "@/context/Provider";

const Varients = ({ sizes, colors, productVariants }) => {
  const [availableColors, setAvailableColors] = useState(colors);
  const context = useContext(StoreContext)
  const {selectedSize, setSelectedSize, selectedColor, setSelectedColor ,setProgress} = context
  const allSizes = ["S", "M", "L", "XL", "2XL"];
  
  useEffect(()=>{
    setProgress(100)
  },[])
  const showAccordingToColor = (size) => {
    if (selectedSize == size) {
      setSelectedSize("");
      setAvailableColors(colors);
    } else {
      setSelectedSize(size);
      const newColors = [];
      productVariants.forEach((variant) => {
        if (variant.size === size && variant.quantity > 0) {
          newColors.push(variant.color);
        }
      });
      setAvailableColors([...newColors]);
    }
    setSelectedColor("");
  };
  return (
    <div className="w-[70%] h-[100%] ">
      {allSizes.map((size, index) => {
        return (
          <button
            disabled={!sizes.includes(size)}
            onClick={() => showAccordingToColor(size)}
            key={index}
            className={`w-[2.2rem] p-[.2rem] border-2  m-[.2rem] text-[.9rem]  disabled:text-gray-200 ${
              selectedSize === size
                ? "border-black font-semibold "
                : "border-gray-300"
            }`}
          >
            {size}
          </button>
        );
      })}

      {/* COLORS */}
      <div className="w-full h-[50%] flex gap-[.5rem] items-center my-[1.25%] flex-wrap">
        {availableColors.map((color, index) => {
          return (
            <span
              key={index}
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
              className={`w-[1.5rem] h-[1.5rem] rounded-full m-[.2rem]  border-[.1rem]  text-[.5rem] cursor-pointer ${
                selectedColor === color ? "border-black" : "border-gray-300"
              }`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Varients;
