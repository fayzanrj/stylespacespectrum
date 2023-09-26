"use client";
import Navbar from "@/components/navbar";
import React, { useContext } from "react";
import "@/styles/globals.css";
import { Provider, StoreContext } from "@/context/Provider";
import SideNav from "@/components/dashboardComponents/sideNav";
import Logo from "@/components/logo";

const RootLayout = ({ children }) => {
  const context = useContext(StoreContext);
  const { adminLoggedIn } = context;
  return (
    <div className="w-full pt-[10vh] min_height flex">
      {adminLoggedIn ? (
        <div className="flex w-full h-full">
          <SideNav />
          <main className="dashboard_Page h-full Padding text-center">{children}</main>
        </div>
      ) : (
        <div className="Order_Received_Box min-h-[50vh] h-fit shadow-2xl p-[1rem]">
          <Logo />
          <div className="text-center mt-[10%]">
            <p className="text-[1.6rem]">404 No Page found</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RootLayout;
