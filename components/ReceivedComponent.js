"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Logo from "@/components/logo";
import { StoreContext } from "@/context/Provider";

const ReceivedComponent = () => {
  const context = useContext(StoreContext);
  const { order, subTotal, setProgress } = context;

  useEffect(() => {
    setProgress(100);
  }, []);
  return (
    <div className="w-full pt-[15vh] min_height flex gap-[1rem] justify-center items-center flex-wrap py-[2rem]">
      <div className="Order_Received_Box min-h-[50vh] h-fit shadow-2xl p-[1rem]">
        {/* LOGO */}
        <Logo />

        {order ? (
          <>
            <div className="w-full text-center text-[1.05rem] font-semibold">
              {/* THANK YOU */}
              Thank you {order.shippingInfo.name.toUpperCase()}. We have
              received your order
            </div>

            {/* MESSAGE */}
            <div className="w-[100%] text-center">
              <p className="text-[.8rem]  text-gray-500">
                If you do not receive confirmation email/message within next 24
                hours, email us at stylespacespectrum@gmail.com or whatsapp us
                at +92123456789.
              </p>
            </div>
            {/* ORDER NUMBER */}
            <div className="w-full text-[1.4rem] font-bold my-[.5rem]">
              Order#11223344
            </div>

            {/* Order Details */}
            <div>
              {/* HEADINGS */}
              <hr className="bg-slate-600 w-full text-center m-[.5rem]" />
              <div className="w-full flex mb-[.5rem]">
                <div className="w-[10%]"></div>
                <div className="w-[55%] text-center font-semibold">
                  Name / (Size/Color)
                </div>
                <div className="w-[20%] text-center font-semibold ">
                  Quanity
                </div>
                <div className="w-[15%] text-center font-semibold">Total</div>
              </div>
              <hr className="bg-slate-600 w-full text-center m-[.5rem]" />

              {/* ORDER ITEMS */}
              {order.cart.map((product, index) => {
                return <OrderItem key={index} product={product} />;
              })}
            </div>

            {/* TOTAL */}
            <div className="w-full h-fit my-[1rem]">
              <div className="text-center font-bold m-[.5rem]">ORDER TOTAL</div>
              <div className="w-full flex justify-between">
                <div className="w-[70%]">Sub total</div>
                <div className="w-[30%] text-left ">
                  PKR {Number.parseFloat(subTotal).toFixed(2)}
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-[70%]">Delivery Charges</div>
                <div className="w-[30%] text-left ">PKR 500</div>
              </div>
              <div className="w-full flex justify-between font-bold">
                <div className="w-[70%]">Total Payable</div>
                <div className="w-[30%] text-left ">
                  PKR {Number.parseFloat(subTotal + 500).toFixed(2)}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center mt-[10%]">
            <p className="text-[1.6rem]">404 No Order found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReceivedComponent;

const OrderItem = ({ product }) => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-[10%] object-contain flex justify-center items-center">
          <Image src={product.productImg} width={40} height={10} alt="img" />
        </div>
        <div className="w-[55%] p-[.2rem]  text-center">
          {product.productName}
          <div className=" flex items-center justify-center">
            {product.size} /{" "}
            <p
              style={{ backgroundColor: product.color }}
              className={`w-[1rem] h-[1rem] rounded-full m-[.2rem]  border-[.1rem]  text-[.5rem] cursor-pointer 
                border-gray-300`}
            ></p>
          </div>
        </div>
        <div className="w-[20%] text-center flex justify-center items-center">
          {product.quantity}
        </div>
        <div className="w-[15%] text-center flex justify-center items-center">
          {Number.parseFloat(product.quantity * product.productPrice).toFixed(
            2
          )}
        </div>
      </div>

      <hr className="bg-slate-600 w-full text-center my-[.5rem]" />
    </>
  );
};

// ORDER ITEM COMPONENT
