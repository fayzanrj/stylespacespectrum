"use client";
import { StoreContext } from "@/context/Provider";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { memo, useContext, useEffect } from "react";

const CardItem = ({ title, price, image, id, variants, desc }) => {
  const context = useContext(StoreContext);
  const { setProgress, progress } = context;

  variants = JSON.parse(variants);

  const colors = [];
  variants.forEach((variant) => {
    if (!colors.includes(variant.color) && variant.quantity > 0) {
      colors.push(variant.color);
    }

    useEffect(()=>{
      setProgress(100)
    })
  });

  return (
    <Link href={`/product/${id}`} onClick={() => setProgress(70)}>
      <div className="w-[20rem] h-[27rem] shadow-slate-200 shadow rounded-xl overflow-hidden cursor-pointer">
        {/* IMAGE DIV */}
        <div className="w-full h-[55%]">
          <Image
            className="w-full h-full object-contain overflow-hidden"
            src={image}
            priority
            sizes="(max-width: 768px)"
            alt="ProductImg"
            width={200}
            height={10}
          />
        </div>
        {/* DETAILS DIV */}
        <div className="w-full h-[50%] overflow-hidden px-[1rem] py-[5%]">
          {/* TITLE */}
          <div className="text-slate-950 w-full h-[20%] text-[1.2rem] font-semibold">
            {title}
          </div>
          {/* CATEGORY   */}
          <div className="text-black w-full h-[30%] ">
            {desc.slice(0, 70)}....
          </div>
          {/* SIZES  */}
          <div className="w-full h-[20%] flex items-center my-[1.25%] font-semibold">
            PKR {price}/-
          </div>
          {/* COLORS */}
          <div className="w-full h-[20%] flex gap-[.5rem] items-center my-[1.25%]">
            {colors.map((color, index) => {
              return (
                <span
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-[1.5rem] h-[1.5rem] rounded-full m-[.2rem] border-[.1rem] border-gray-300"
                />
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(CardItem);
