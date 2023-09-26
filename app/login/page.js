"use client";
import React, { memo, useContext, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import { StoreContext } from "@/context/Provider";
import InputComponent from "@/components/dashboardComponents/InputComponent";

const Login = () => {
  const context = useContext(StoreContext);
  const { setUser } = context;
  const router = useRouter();
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email?.current.value,
      password: password?.current.value,
    };
    console.log(data);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res);

    if (res.authToken) {
      setUser({
        name : res.name,
        email : res.email,
        pic : res.pic
      })
      router.back();
    }
    // console.log('submit')
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
          {/* EMAIL */}
          <InputComponent type={"text"} label={"E-mail"} id={"email"} refVar={email} placeholder={"Email e.g. johndoe@mail.com"} />
          {/*  PASSWORD */}
          <InputComponent type={"password"} label={"Password"} id={"password"} refVar={password} placeholder={"********"} />
         
          <div className="flex items-center justify-between">
            <Link
              className="inline-block align-baseline font-bold text-sm text-black hover:text-zinc-600"
              href="/"
            >
              Forgot Password?
            </Link>
            <button
              className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          {/* SIGN UP REDIRECT */}
          <div className="mt-[1.5rem] w-full text-center">
            <p>
              Dont have an account?{" "}
              <Link className="font-bold" href={"/signup"}>
                Sign Up
              </Link>
            </p>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Style Space Spectrum. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default memo(Login);
