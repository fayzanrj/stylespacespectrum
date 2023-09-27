"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useContext, useState } from "react";
import logo from "../public/logo/logo-black.png";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import styles from "../styles/nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormSearch } from "react-icons/gr";
import { StoreContext } from "@/context/Provider";
import Cart from "./cart";
import LoadingBar from "react-top-loading-bar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const context = useContext(StoreContext);
  const {
    cart,
    setCart,
    subTotal,
    setSubTotal,
    saveCart,
    progress,
    setProgress,
  } = context;

  // TOGGLE MENU ON MOBILE VIEW
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
    openCart ? setOpenCart(false) : null;
  };

  const goto = async () => {
    toggleMenu();
    setProgress(70);
  };
  const handleCheckout = () => {
    toggleCart();
    setProgress(70);
  };

  // TOGGLE CART
  const toggleCart = () => {
    setOpenCart((prev) => !prev);
    openMenu ? setOpenMenu(false) : null;
  };

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} />
      <nav className="h-[10vh] w-full px-[1rem] flex items-center justify-between border-b-2 fixed bg-white">
        {/*  */}
        {/* MOBILE NAVIGATION */}

        {/* HAMBURGER ICON */}
        <button
          aria-label="HamburgerMenu"
          name="HamburgerMenu"
          onClick={toggleMenu}
          className={styles.ham_Burger_Icon}
        >
          <RxHamburgerMenu size={"2rem"} />
        </button>

        {/* MOBILE NAVIGATION MENY */}
        <div
          className={`${
            openMenu ? styles.ham_Burger_Menu_open : styles.ham_Burger_Menu
          } z-10`}
        >
          {/* MOBILE NAV CLOSE BUTTON */}
          <div className="w-full text-right min-h-[2.2rem]">
            <button
              aria-label="HamBurgerMenuClose"
              name="HamBurgerMenuClose"
              onClick={toggleMenu}
            >
              <AiOutlineClose size={"2rem"} />
            </button>
          </div>

          {/* MOBILE NAV LIST */}
          <ul className="w-full mt-[1.5rem]">
            <hr className="w-full bg-black" />

            {/* HOME LINK */}
            <Link onClick={goto} href={"/"} className="w-full h-[8vh] p-[1rem] font-mono text-center">
              <li>Home</li>
            </Link>
            <hr className="w-full bg-black" />

            {/* T SHIRTS LINK MOBILE */}
            <Link
              onClick={goto}
              href={"/tshirts"}
              className="w-full h-[8vh]  p-[1rem] font-mono text-center"
            >
              <li>T-Shirts</li>
            </Link>
            <hr className="w-full bg-black" />

            {/* HOODIES LINK MOBILE*/}
            <Link
              onClick={goto}
              href={"/hoodies"}
              className="w-full h-[8vh] p-[1rem] font-mono text-center"
            >
              <li>Hoodies</li>
            </Link>
            <hr className="w-full bg-black" />
            {/* JACKETS LINK MOBILE*/}
            <Link
              onClick={goto}
              href={"/jackets"}
              className="w-full h-[8vh] p-[1rem] font-mono text-center"
            >
              <li>Jackets</li>
            </Link>
            <hr className="w-full bg-black" />
            {/* MEN LINK MOBILE */}
            <Link
              onClick={goto}
              href={"/men"}
              className="W-full h-[8vh]  p-[1rem] font-mono text-center"
            >
              <li>Men</li>
            </Link>
            <hr className="w-full bg-black" />
            {/* WOMEN LINK MOBILE */}
            <Link
              onClick={goto}
              href={"/women"}
              className="w-full h-[8vh]  p-[1rem] font-mono text-center"
            >
              <li>Women</li>
            </Link>
            <hr className="w-full bg-black" />
          </ul>
        </div>

        <div className="flex items-center">
          {/* SSS LOGO */}
          <Link
            href={"/"}
            className="w-[10rem] h-[10vh] cursor-pointer relative"
            onClick={() => setProgress(70)}
          >
            <Image
              className="h-auto w-auto"
              src={logo}
              fill
              style={{ objectFit: "contain" }}
              alt="logo"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          {/* These will not show in MOBILE */}
          {/* T SHIRTS LINK DESKTOP */}
          <Link
            href={"/tshirts"}
            className="big_Screen_Item ml-[1.5rem] mx-[1rem] font-semibold cursor-pointer hover:underline duration-1000 font-mono"
            onClick={() => setProgress(70)}
          >
            T-Shirts
          </Link>

          {/* HOODIES LINK DESKTOP */}
          <Link
            href={"/hoodies"}
            className="font-mono big_Screen_Item mx-[1rem] font-semibold cursor-pointer hover:underline duration-1000"
            onClick={() => setProgress(70)}
          >
            Hoodies
          </Link>
          {/* JACKETS LINK DESKTOP */}
          <Link
            href={"/jackets"}
            className="font-mono  big_Screen_Item font-semibold mx-[1rem] cursor-pointer hover:underline duration-1000"
            onClick={() => setProgress(70)}
          >
            Jackets
          </Link>
          {/* MEN LINK DESKTOP */}
          <Link
            href={"/men"}
            className="font-mono big_Screen_Item  mx-[1rem] font-semibold cursor-pointer hover:underline duration-1000"
            onClick={() => setProgress(70)}
          >
            Men
          </Link>
          {/* WOMEN LINK DESKTOP */}
          <Link
            href={"/women"}
            className="font-mono  big_Screen_Item font-semibold mx-[1rem] cursor-pointer hover:underline duration-1000"
            onClick={() => setProgress(70)}
          >
            Women
          </Link>
        </div>

        {/* CART TOGGLE BTN*/}
        <div className="">
          <button name="Cart" onClick={toggleCart} aria-label="cart">
            <AiOutlineShoppingCart size={"2.2rem"} />
          </button>
        </div>
        {/* CART */}
        <Cart
          toggleCart={toggleCart}
          handleCheckout={handleCheckout}
          cart={cart}
          setCart={setCart}
          openCart={openCart}
          subTotal={subTotal}
          setSubTotal={setSubTotal}
          saveCart={saveCart}
        />
      </nav>
    </>
  );
};

export default memo(Navbar);
