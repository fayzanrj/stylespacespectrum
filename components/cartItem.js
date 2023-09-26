import Image from "next/image";
import React, { memo } from "react";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const CartItem = ({ item, index, cart, setCart, setSubTotal }) => {
  const [quantity, setQuantity] = useState(cart[index].quantity);
  // ADD COUNT
  const addQty = () => {
    cart[index].quantity++;
    setSubTotal((prev) => prev + item.productPrice);
    setQuantity(cart[index].quantity);
  };

  // SUBTRACT COUNT
  const subtractQty = () => {
    if (cart[index].quantity > 1) {
      setSubTotal((prev) => prev - item.price);
      cart[index].quantity--;
      setQuantity(cart[index].quantity);
    }
  };

  const deleteItem = () => {
    const tPrice = item.quantity * item.productPrice;
    setSubTotal((prev) => prev - tPrice);
    setCart((cart) => {
      return cart.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      {/* IMAGE AND TITLE */}
      <div className="w-full flex h-[4rem] object-contain overflow-hidden items-center">
        <div className="w-auto h-auto">
          <Image src={item.productImg} alt="image" width={40} height={10} />
        </div>
        <div className="w-[75%] text-[.9rem] py-[.2rem] pl-[.6rem]  font-bold">
          {item.productName}
        </div>
      </div>

      <div className="flex w-full my-[.2rem] justify-center items-center mb-[1rem]">
        {/* SIZE / COLOR */}
        <div className="w-[50%] text-[.9rem] font-semibold text-center">
          <p>{item.size} / {item.color}</p>
        </div>
        {/* PRICE */}
        <div className="w-[50%] text-center font-semibold">
          PKR {item.productPrice}/-
        </div>
      </div>

      {/* QUANTITY BTN */}
      <div className="flex justify-between ">
        <div className="w-[20%] ">
          {" "}
          <button onClick={deleteItem} className="pl-[1rem] text-white m-1 ">
            <AiTwotoneDelete color="black" size={"2rem"} />
          </button>
        </div>

        <div className="flex justify-center items-center">
          <button
            disabled={cart[index].quantity > 1 ? false : true}
            onClick={subtractQty}
            className="mx-[1rem] h-[1.5rem] bg-black text-white w-[1.5rem]  disabled:bg-zinc-600"
          >
            -
          </button>
          <p>{cart[index].quantity}</p>
          <button
            onClick={addQty}
            className="mx-[1rem] h-[1.5rem] bg-black text-white w-[1.5rem] "
          >
            +
          </button>
        </div>
      </div>
      <hr className="bg-slate-600 w-full text-center my-[1rem]" />
    </>
  );
};

export default memo(CartItem);
