"use client";
import { StoreContext } from "@/context/Provider";
import { useRouter } from "next/navigation";
import React, { useContext, useRef } from "react";
import { GrFormSearch } from "react-icons/gr";

const SearchBar = () => {
  const search = useRef();
  const router = useRouter();
  const context = useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search?.current.value.length > 0) {
      context.setProgress(70);
      router.push(`/search/${search?.current.value}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full pt-[12vh] px-[5%]">
      <div className="w-[90%] h-fit bg-gray-200 mx-[5%] rounded-3xl flex justify-center items-center min-h-[5vh]">
        <input
        id="search"
          ref={search}
          placeholder="Search a product"
          className="w-[95%]  bg-transparent px-[1rem] outline-none "
        />
        <button aria-label="SearchBtn" type="submit">
          <GrFormSearch size={"2.5rem"} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
