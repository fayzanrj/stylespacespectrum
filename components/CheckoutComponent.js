"use client";
import React, { memo, useContext, useEffect, useRef } from "react";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import { StoreContext } from "@/context/Provider";
import Head from "next/head";


const CheckoutComponent = () => {
  const context = useContext(StoreContext);
  const { cart, setOrder, setProgress } = context;

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();

  const router = useRouter();

  useEffect(()=>{
    setProgress(100)
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(40)
    setOrder({
      shippingInfo: {
        name: nameRef?.current.value,
        email: emailRef?.current.value,
        phone: phoneRef?.current.value,
        address: addressRef.current.value,
        postalcode: postalCodeRef.current.value,
        city: cityRef.current.value,
        province: provinceRef.current.value,
      },
      cart: cart,
    });
    router.push("/checkout/orderConfirmation");
    setProgress(90)
  };
  return (
    <div className="min_height w-full flex flex-col justify-center items-center pt-[10vh]">
      <Head>
        <title>Checkout</title>
      </Head>
      {/* FORM */}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* LOGO */}
        <Logo />

        {/* HEADING */}
        <h3 className="text-center text-[2rem] mb-[.6rem] font-bold">
          Checkout
        </h3>

        {/* Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            ref={nameRef}
            type="text"
            placeholder="e.g. John Doe"
          />
        </div>

        {/* PHONE */}
        <div className="w-full flex flex-row flex-wrap gap-[2%]">
          <div className="Checkout_Input_Length">
            {/* Number */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                ref={phoneRef}
                type="tel"
                placeholder="e.g. +921234567890 or 03123456789"
              />
            </div>
          </div>

          <div className="Checkout_Input_Length">
            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                ref={emailRef}
                type="text"
                placeholder="e.g. johndoe@abc.com"
              />
            </div>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            ref={addressRef}
            type="text"
            placeholder="e.g. Apartment no., Area name, Street name etc"
          />
        </div>

        <div className="w-full flex flex-row flex-wrap gap-[2%]">
          <div className="Checkout_Input_Length2">
            {/* POSTAL CODE */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="postalCode"
              >
                Postal Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="postalCode"
                ref={postalCodeRef}
                type="tel"
                placeholder="e.g. 52520 etc"
              />
            </div>
          </div>

          <div className="Checkout_Input_Length2">
            {/* City */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                ref={cityRef}
                type="text"
                placeholder="e.g. Lahore, Karachi etc"
              />
            </div>
          </div>

          <div className="Checkout_Input_Length2">
            {/* Province */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="province"
              >
                Province
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="province"
                ref={provinceRef}
                type="text"
                placeholder="e.g. Punjab, Sindh etc"
              />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="w-full text-right">
          <button
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-right"
            type="submit"
            onClick={handleSubmit}
          >
            Checkout
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Style Space Spectrum. All rights reserved.
      </p>
    </div>
  );
};

export default memo(CheckoutComponent);
