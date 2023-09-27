"use client";
import Logo from "@/components/logo";
import { StoreContext } from "@/context/Provider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { memo, useContext, useEffect } from "react";

const ConfirmComponent = () => {
  const router = useRouter();
  const context = useContext(StoreContext);
  // const { order } = context;
  const { subTotal, order, setProgress } = context;

  useEffect(() => {
    setProgress(100);
  }, []);

  const confirmOrder = () => {
    setProgress(40);
    router.push("orderReceived");
    setProgress(90);
  };

  return (
    <div className="w-full pt-[15vh] min_height h-fit flex gap-[1rem] justify-center items-center flex-wrap py-[2rem]">
      <div className="Order_Summary_Box min-h-[50vh] justify-center h-fit shadow-2xl p-[1rem]">
        {/* LOGO */}
        {/* <Logo /> */}
        {order ? (
          <>
            {/* CART SUMMARY BOX */}
            <div className="w-full text-center">
              <div className="text-center font-bold ">ORDER SUMMARY</div>
              <hr className="bg-slate-600 w-full text-center my-[.5rem]" />

              {/* CART ITEMS */}
              {order.cart.map((product, index) => {
                return <CartSummaryItems key={index} product={product} />;
              })}
            </div>

            {/* SHIPPING DETAILS AND BILL */}
            <div className="w-full flex flex-row flex-wrap justify-between mt-[1rem] gap-[1rem]">
              {/* BILL DETAILS */}
              <div className="Shipping_Bill h-[25vh] ">
                <div className="w-full h-fit my-[1rem] p-[.5rem]">
                  <div className="font-semibold mb-[.6rem]">Order Total</div>
                  <div className="w-full  flex justify-between  my-[.5rem]">
                    <div className="w-[70%]">Sub total</div>
                    <div className="w-[30%] text-left ">
                      PKR {Number.parseFloat(subTotal).toFixed(2)}
                    </div>
                  </div>
                  <div className="w-full  flex justify-between my-[.5rem]">
                    <div className="w-[70%]">Delivery Charges</div>
                    <div className="w-[30%] text-left ">PKR 500</div>
                  </div>
                  <div className="w-full  flex justify-between font-bold my-[.5rem]">
                    <div className="w-[70%]">Total Payable</div>
                    <div className="w-[30%] text-left ">
                      PKR {Number.parseFloat(subTotal + 500).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* SHIPPING DETAILS */}
              <div className="Shipping_Bill h-[25vh] p-[.5rem] shadow-2xl">
                <div className="font-semibold mb-[.6rem]">SHIPPING INFO</div>
                <div>Name : {order.shippingInfo.name}</div>
                <div>
                  Phone : {order.shippingInfo.phone} <br />
                  Email : {order.shippingInfo.email}
                </div>
                <div>
                  Address : {order.shippingInfo.address},
                  {order.shippingInfo.city},{order.shippingInfo.province},
                  {order.shippingInfo.postalcode}
                </div>
              </div>
            </div>

            {/* CONFRIMATION BUTTTON */}
            <div className="w-full text-right my-[1.2rem]">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-right"
                type="button"
                onClick={confirmOrder}
              >
                Confirm Order
              </button>
            </div>
          </>
        ) : (
          <div className="text-center mt-[10%]">
            <p className="text-[1.6rem]">No Order found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ConfirmComponent);

const CartSummaryItems = ({ product }) => {
  return (
    <>
      <div className="w-full min-h-[10rem]">
        {/* IMAGE AND TITLE */}
        <div className="w-full flex h-[5rem] overflow-hidden items-center">
          <div className=" h-[5rem] text-center object-contain">
            <Image
              src={product.productImg}
              alt="image"
              width={60}
              height={10}
            />
          </div>
          <div className=" m-[1rem] text-[1.2rem] flex items-center py-[.2rem] px-[.4rem]  font-bold">
            {product.productName}
          </div>
        </div>

        {/* QUANTITY SIZE COLOR PRICE */}
        <div className="w-full h-fit my-[1rem] ">
          {/* QUANTITY */}
          <div className="w-full flex">
            <div className="w-[70%] text-left pl-[2rem]">Quantity</div>
            <div className="w-[30%] text-left ">{product.quantity}</div>
          </div>
          {/* SIZE & COLOR*/}
          <div className="w-full flex justify-between">
            <div className="w-[70%] text-left pl-[2rem]">Size/Color</div>
            <div className="w-[30%] text-left flex items-center">
              {product.size} /
              <p
                style={{ backgroundColor: product.color }}
                className={`w-[1rem] h-[1rem] rounded-full m-[.2rem]  border-[.1rem]  text-[.5rem] cursor-pointer 
                border-gray-300`}
              ></p>
            </div>
          </div>
          {/* PRICE */}
          <div className="w-full flex justify-between">
            <div className="w-[70%] text-left pl-[2rem]">Price (per item)</div>
            <div className="w-[30%] text-left ">
              PKR {product.productPrice} /-
            </div>
          </div>
          {/* Total */}
          <div className="w-full flex justify-between">
            <div className="w-[70%] text-left pl-[2rem]">Total</div>
            <div className="w-[30%] text-left ">
              PKR {product.productPrice * product.quantity}
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-slate-600 w-full text-center m-[.5rem]" />
    </>
  );
};
