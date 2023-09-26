"use client";
import React from "react";

const InputComponent = ({ id, refVar, placeholder, label, type }) => {
  return (
    <div className="my-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 text-left"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        aria-label={id}
        required={true}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        ref={refVar}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
