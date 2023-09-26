import Link from "next/link";
import React from "react";

const SideNav = () => {
  return (
    <div className="sideNav max-h-[90vh]  overflow-y-scroll">
      <ul className="w-full">
        

        <Link href="/manage/admin/dashboard/"><li className="p-[2rem] font-semibold">Analytrics</li></Link>

        <hr className="bg-slate-600 w-full text-center" />
        <Link href="/manage/admin/dashboard/addproduct"><li className="p-[2rem] font-semibold">Add a product</li></Link>

        <hr className="bg-slate-600 w-full text-center" />
        <Link href="/manage/admin/dashboard/updateproduct"><li className="p-[2rem] font-semibold">Update a product</li></Link>

        <hr className="bg-slate-600 w-full text-center" />
        <Link href="/manage/admin/dashboard/deleteproduct"><li className="p-[2rem] font-semibold">Delete a product</li></Link>

        <hr className="bg-slate-600 w-full text-center" />
        <Link href="/manage/admin/dashboard/createvoucher"><li className="p-[2rem] font-semibold">Create a voucher</li></Link>

        <hr className="bg-slate-600 w-full text-center" />
        <Link href="/manage/admin/dashboard/updatevoucher"><li className="p-[2rem] font-semibold">Update a voucher</li></Link>

        <hr className="bg-slate-600 w-full text-center" />
        <Link href="/manage/admin/dashboard/deletevoucher"><li className="p-[2rem] font-semibold">Delete a voucher</li></Link>

        <hr className="bg-slate-600 w-full text-center" />
        <Link href="/manage/admin/dashboard/allorders"><li className="p-[2rem] font-semibold">All Orders</li></Link>

        <hr className="bg-slate-600 w-full text-center" />
        <Link href="/manage/admin/dashboard/searchorder"><li className="p-[2rem] font-semibold">Search an order</li></Link>
      </ul>
    </div>
  );
};

export default SideNav;
