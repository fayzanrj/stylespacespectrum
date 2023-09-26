"use client";
import InputComponent from "@/components/dashboardComponents/InputComponent";
import React, { useRef, useState } from "react";

const DeleteVoucher = () => {
  const searchTxt = useRef();
  const [voucher, setVoucher] = useState();

  const handleClick = async () => {
    console.log(searchTxt?.current.value);
    if (searchTxt?.current.value.length > 0) {
      const response = await fetch(
        `http://localhost:3000/api/voucher/getvoucher/${searchTxt?.current.value}`
      );
      const res = await response.json();
      console.log(res)
      if (res.status === "success") {
        setVoucher(res.voucher);
      }
    }
  };

  const deletev = async () => {
    console.log(voucher.voucherCode);
    const response = await fetch(
      `http://localhost:3000/api/voucher/deletevoucher/${voucher.voucherCode}`,
      {
        method: "DELETE",
      }
    );
    const res = await response.json();
    console.log(res);
    if (res.status == "success") {
      setVoucher();
    }
  };

  return (
    <div className="w-full h-full">
      {/* SEARCH SECTION */}
      <div className="w-[100%] text-center">
        <InputComponent
          label={"Search Product"}
          id={"searchProduct"}
          refVar={searchTxt}
          type={"Text"}
          placeholder={"Product ID e.g. 1001 or ab300cd etc"}
        />
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleClick}
        >
          Search
        </button>
      </div>

      {/* VOUCHER DETAILS */}
      {voucher && (
        <div className="w-full my-[2rem] shadow-xl p-[1rem]">
          <table className="w-full">
            <thead className="w-full">
              <th class="text-center px-[5vw] py-[.5rem] border-2 border-stone-500">
                Voucher Code
              </th>
              <th class="text-center px-[5vw] py-[.5rem] border-2 border-stone-500">
                Quantity
              </th>
              <th class="text-center px-[5vw] py-[.5rem] border-2 border-stone-500">
                Discount
              </th>
            </thead>
            <tbody className="w-full">
              <td class="text-center px-[5vw] py-[.5rem] border-2 border-stone-500 ">
                {voucher.voucherCode}
              </td>
              <td class="text-center px-[5vw] py-[.5rem] border-2 border-stone-500">
                {voucher.quantity}
              </td>
              <td class="text-center px-[5vw] py-[.5rem] border-2 border-stone-500">
                {voucher.discount}
              </td>
            </tbody>
          </table>
          <div className="text-left my-[1rem]">
            Description :<span>{voucher.desc}</span>
          </div>
          <div className="text-right">
            <button
              className="bg-black h-[6vh] hover:bg-gray-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline my-[1rem]"
              onClick={deletev}
            >
              Delete Voucher
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteVoucher;
