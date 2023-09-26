import React, { memo } from "react";
import logo from "@/public/logo/logo-black.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-full h-[10vh] text-center flex justify-center p-[1rem] ">
      <Image src={logo} width={128} height={10} alt="logo" />
    </div>
  );
};

export default memo(Logo);
