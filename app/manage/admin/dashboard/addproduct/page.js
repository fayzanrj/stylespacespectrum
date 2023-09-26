"use client";
import InputComponent from "@/components/dashboardComponents/InputComponent";
import axios from "axios";
import React, { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";

const AddProduct = () => {
  const [variants, setVariants] = useState([]);
  const [variantNumber, setVaiantNumber] = useState(0);
  const [img, setImg] = useState();
  const productName = useRef();
  const productDesc = useRef();
  const productPrice = useRef();
  const productId = useRef();
  const productCategory = useRef();
  const productImage = useRef();

  const addVariant = () => {
    const variant = {
      color: "",
      size: "",
      quantity: "",
    };
    setVariants([...variants, variant]);
  };

  const getImgUrl = async () => {
    const data = {
      file: img,
      upload_preset: "products_images",
      api_key: process.env.CLOUDINARY_API_KEY,
    };

    if (data.file) {
      const cloudinaryApi =
        "https://api.cloudinary.com/v1_1/dbce45rdg/image/upload";

      // Make the Axios POST request to Cloudinary
      const response = await axios.post(cloudinaryApi, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res = await response.data;
      return res.secure_url;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/products/getproduct/${productId?.current.value}`
    );
    const res = await response.json();

    if (res.message == "No Product found") {
      const imgUrl = await getImgUrl();
      const product = {
        productId: productId?.current.value,
        productCategory: productCategory?.current.value,
        productName: productName?.current.value,
        productDesc: productDesc?.current.value,
        productPrice: productPrice?.current.value,
        productVariants: variants,
        productImg: imgUrl,
      };

      const response = await fetch("/api/products/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const res = await response.json();
    }
  };

  return (
    // <div className="Padding w-full h-full  text-center flex">
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-white w-full text-left shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      {/* HEADING */}
      <h3 className="text-center text-[2rem] mb-[.6rem] font-bold">
        Add a product
      </h3>
      {/* PRODUCT ID */}
      <InputComponent
        type={"text"}
        label={"Product ID"}
        id={"productId"}
        refVar={productId}
        placeholder={"Product ID e.g. 1001 or ab300cd etc"}
      />
      {/* PRODUCT CATEGORY */}
      <InputComponent
        type={"text"}
        label={"Product Category"}
        id={"productCategory"}
        refVar={productCategory}
        placeholder={"Product ID e.g. 1001 or ab300cd etc"}
      />
      {/* Name */}
      <InputComponent
        type={"text"}
        label={"Product Name"}
        id={"productName"}
        refVar={productName}
        placeholder={"Product ID e.g. 1001 or ab300cd etc"}
      />
      {/* Product Description */}
      <div className="my-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="productDescription"
        >
          Product Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="productDescription"
          placeholder=""
          ref={productDesc}
        />
      </div>
      {/* Product Price */}
      <InputComponent
        type={"number"}
        label={"Product Price"}
        id={"productPrice"}
        refVar={productPrice}
        placeholder={"Product ID e.g. 1001 or ab300cd etc"}
      />
      {/* Product Image */}
      <div className="my-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="productImage"
        >
          Product Image
        </label>
        <input
          type="file"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="productImage"
          placeholder=""
          ref={productImage}
          onChange={(e) => setImg((prev) => e.target.files[0])}
          // onChange={(e) => console.log(e.target.files)}
        />
      </div>
      {variants.map((item, index) => {
        return (
          <AddVariant
            key={index}
            variants={variants}
            index={index}
            setVariants={setVariants}
          />
        );
      })}
      {/* ADD VARIANT BUTTON */}
      <button
        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-right"
        type="button"
        onClick={addVariant}
      >
        Add variant
      </button>
      <div className="w-full text-right">
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-right"
          type="submit"
        >
          Checkout
        </button>
      </div>
    </form>
    // </div>
  );
};

export default AddProduct;

const AddVariant = ({ variants, index, setVariants }) => {
  //  FUNCTION TO CHANGE INPUT
  const changeInputValue = (e) => {
    if (e.target.id == `productColor${index}`) {
      variants[index].color = e.target.value;
    } else if (e.target.id == `productSize${index}`) {
      variants[index].size = e.target.value;
    } else if (e.target.id == `productQuantity${index}`) {
      variants[index].quantity = e.target.value;
    }
  };

  const deleteVariant = (p) => {
    setVariants((prev) => {
      return prev.filter((_, i) => i !== p);
    });
  };
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <h3 className="text-[1.1rem] font-semibold text-center">
          VARIANT#{index + 1}
        </h3>
        <button
          name="deleteVariant"
          className="ml-[4rem]"
          onClick={() => deleteVariant(index)}
        >
          <MdDelete size={"1.5rem"} />
        </button>
      </div>
      <div className="flex flex-wrap gap-[2%]">
        {/* Product Color */}
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={`productColor${index}`}
          >
            Color
          </label>
          <input
            required={false}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`productColor${index}`}
            onChange={(e) => changeInputValue(e)}
            type="text"
            placeholder="e.g. Red etc"
          />
        </div>

        {/* Product Size */}
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={`productSize${index}`}
          >
            Size
          </label>
          <input
            required={false}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`productSize${index}`}
            onChange={(e) => changeInputValue(e)}
            type="text"
            placeholder="e.g. S,M,L,XL etc"
          />
        </div>

        {/* Product Variant quantity */}
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={`productQuantity${index}`}
          >
            Quantity
          </label>
          <input
            required={false}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`productQuantity${index}`}
            onChange={(e) => changeInputValue(e)}
            type="number"
            // placeholder=""
          />
        </div>
      </div>
    </div>
  );
};
