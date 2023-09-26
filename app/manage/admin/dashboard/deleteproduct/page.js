"use client";
import InputComponent from "@/components/dashboardComponents/InputComponent";
import ProductCard from "@/components/dashboardComponents/productCard";
import React, { useRef, useState } from "react";

const DeleteProduct = () => {
  const searchTxt = useRef();
  const [product, setProduct] = useState();

  const handleClick = async () => {
    if (searchTxt?.current.value.length > 0) {
      const response = await fetch(
        `http://localhost:3000/api/products/getproduct/${searchTxt?.current.value}`
      );
      const res = await response.json();
      if (res.message === "Product found") {
        setProduct({
          productId: res.product.productId,
          productImg: res.product.productImg,
          productName: res.product.productName,
          productDesc: res.product.productDesc,
          productPrice: res.product.productPrice,
          productVariants: await JSON.parse(res.product.productVariants),
        });
      }
    }
  };

  const deleteProduct = async () => {
     
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

      <div className="w-full my-[2rem]">
        {product && <ProductCard product={product} deleteProduct={deleteProduct} />}
      </div>
    </div>
  );
};

export default DeleteProduct;
