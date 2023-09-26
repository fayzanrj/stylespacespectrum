'use client'
import { useRouter } from "next/navigation";
import React from "react";

const Btn = ({ btnText, link ,type}) => {
    const router = useRouter()
  return (
    <button type={type} onClick={() => router.push(link)} className=" min-w-[6rem] p-[.3rem] bg-black text-white m-1 ">
      {btnText}
    </button>
  );
};

export default Btn;
