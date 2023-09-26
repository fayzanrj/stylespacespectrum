"use client";
import React, { memo, useContext, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import InputComponent from "./InputComponent";
import { StoreContext } from "@/context/Provider";

const AdminLogin = () => {
  const username = useRef();
  const password = useRef();
  const router = useRouter();
  const [redirect, setRedirect] = useState();

  const context = useContext(StoreContext);
  const { setAdminLoggedIn } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username?.current.value,
      password: password?.current.value,
    };
    const response = await fetch(`/api/auth/adminlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.status === "success") {
      setRedirect(true);
      setAdminLoggedIn(true);
      router.push("/manage/admin/dashboard");
    }
  };
  return (
    <div className="min_height w-full flex justify-center items-center pt-[15vh]">
      <div className="auth">
        {/* FORM */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
          {/* LOGO */}
          <Logo />
          {redirect && <div>Redirecting....</div>}
          {/* EMAIL */}
          <InputComponent
            label={"Username"}
            type="password"
            refVar={username}
            placeholder={"Admin username"}
            id={"username"}
          />

          {/*  PASSWORD */}
          <InputComponent
            label={"Password"}
            type="password"
            refVar={password}
            placeholder={"**********"}
            id={"password"}
          />
          <div className="text-right">
            <button
              className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Style Space Spectrum. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default memo(AdminLogin);
