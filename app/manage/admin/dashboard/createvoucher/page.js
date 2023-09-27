"use client";
import InputComponent from "@/components/dashboardComponents/InputComponent";
import React, { useRef } from "react";
import toast from "react-hot-toast";

const CreateVoucher = () => {
  const voucherCodeRef = useRef();
  const voucherQuantityRef = useRef();
  const voucherDiscountRef = useRef();
  const voucherDescRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      voucherCodeRef?.current.value.length > 0 &&
      voucherDescRef?.current.value.length > 0 &&
      voucherQuantityRef?.current.value.length > 0 &&
      voucherDiscountRef?.current.value.length > 0
    ) {
      const voucher = {
        voucherCode: voucherCodeRef?.current.value,
        desc: voucherDescRef?.current.value,
        quantity: voucherQuantityRef?.current.value,
        discount: voucherDiscountRef?.current.value,
      };

      const response = await fetch(
        "http://localhost:3000/api/voucher/createvoucher",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(voucher),
        }
      );

      const res = await response.json();
      if(res.status === 'success'){
        toast.success("Voucher Created",{
          style: {
            marginTop : '10vh',
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
          },
          duration : 2500
        })
      } else {
        toast.error(res.message,{
          style: {
            marginTop : '10vh',
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
          },
          duration : 2500
        })
      }
      }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-white w-full h-full text-left shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      {/* HEADING */}
      <h3 className="text-center text-[2rem] mb-[.6rem] font-bold">
        Create a voucher
      </h3>

      {/* VOUCHER CODE */}
      <InputComponent
        type={"text"}
        label={"Voucher Code"}
        id={"voucherCode"}
        refVar={voucherCodeRef}
        placeholder={""}
      />

      {/* VOUCHER QUANTITY */}
      <InputComponent
        type={"number"}
        label={"Voucher Quantity"}
        id={"voucherQuantity"}
        refVar={voucherQuantityRef}
        placeholder={""}
      />
      {/* VOUCHER DESCRIPTION */}
      <InputComponent
        type={"text"}
        label={"Description"}
        id={"voucherDesc"}
        refVar={voucherDescRef}
        placeholder={""}
      />

      {/* VOUCHER QUANTITY */}
      <InputComponent
        type={"number"}
        label={"Discount (%)"}
        id={"voucherDiscount"}
        refVar={voucherDiscountRef}
        placeholder={""}
      />

      {/* SUBMIT BUTTON */}
      <div className="w-full text-right">
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-right"
          type="submit"
        >
          Create Voucher
        </button>
      </div>
    </form>
  );
};

export default CreateVoucher;
