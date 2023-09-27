import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../styles/nav.module.css";
import CartItem from "./cartItem";
import Btn from "./btn";

const Cart = ({
  handleCheckout,
  toggleCart,
  cart,
  setCart,
  openCart,
  subTotal,
  setSubTotal,
}) => {

  const handleEmpty = () => {
    setSubTotal(0);
    setCart([]);
  };

  

  return (
    <div className={openCart ? styles.cart_open : styles.cart}>
      {/* CART CLOSE BUTTON */}
      <div className="w-full flex items-center justify-between">
        <button aria-label="cart" onClick={toggleCart}>
          <AiOutlineClose size={"1.5rem"} />
        </button>
        <button
          aria-label="cartEmty"
          disabled={cart.length <= 0}
          onClick={handleEmpty}
          className=" min-w-[6rem] p-[.3rem] bg-black text-white m-1 disabled:bg-stone-300"
        >
          Empty Cart
        </button>
      </div>
      <hr className="bg-slate-600 w-full text-center my-[.5rem]" />
      {/* CART */}
      <div className="w-full min-h-[77vh]">
        {cart && cart.length > 0 ? (
          <div>
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  item={item}
                  index={index}
                  cart={cart}
                  setCart={setCart}
                  subTotal={subTotal}
                  setSubTotal={setSubTotal}
                />
              );
            })}
            {/* BUTTONS AND SUB TOTAL */}
            <div>
              {/* SUB TOTAL */}
              <div className="w-full flex justify-between font-semibold my-[.5rem]">
                <div className="w-[50%]">Sub-Total</div>
                <div className="w-[50%] text-right ">
                  PKR {Number.parseFloat(subTotal).toFixed(2)}
                </div>
              </div>
              <p className="text-[.8rem] text-center  text-gray-500">
                Total will be calculated at checkout
              </p>
              {/* CHECKOUT BTN */}
              <div className="text-right my-[1rem]" onClick={handleCheckout}>
                <Btn type={"button"} link="/checkout" btnText={"Checkout"} />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center min-h-[5vh] text-gray-500 text-[1.4rem]">
            Theres no items in the cart
          </p>
        )}
      </div>
      <p className="text-center min-h-[5vh] text-gray-500 text-xs">
        &copy;2023 Style Space Spectrum. All rights reserved.
      </p>
    </div>
  );
};

export default Cart;
