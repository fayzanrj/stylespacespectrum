"use client";
import React, { memo, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import InputComponent from "@/components/dashboardComponents/InputComponent";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: nameRef?.current.value,
      email: emailRef?.current.value,
      password: passwordRef?.current.value,
    };
    console.log(data);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res.email);
  };

  return (
    <div className="min_height w-full flex justify-center items-center pt-[15vh]">
      <div className="auth">
        {/* FORM */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* LOGO */}
          <Logo />
          {/* Name */}
          <InputComponent
            type={"text"}
            label={"Name"}
            id={"name"}
            refVar={nameRef}
            placeholder={"Name i.e. John Doe"}
          />

          {/* EMAIL */}
          <InputComponent
            type={"text"}
            label={"E-mail"}
            id={"email"}
            refVar={emailRef}
            placeholder={"Email e.g. johndoe@mail.com"}
          />
          {/*  PASSWORD */}
          <InputComponent
            type={"password"}
            label={"Password"}
            id={"password"}
            refVar={passwordRef}
            placeholder={"********"}
          />
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
              Sign Up
            </button>
          </div>
          {/* SIGN UP REDIRECT */}
          <div className="mt-[1.5rem] w-full text-center">
            <p>
              Already have an account? 
              <Link className="font-bold" href={"/login"}>
                Sign In
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

export default memo(SignUp);
