import Image from "next/image";
import React, { memo } from "react";

const ProductCard = ({ product, deleteProduct }) => {
  return (
    <div className="text-center my-[3rem] p-[1rem] shadow-xl">
      {/* IMAGE */}
      <div className="w-full text-center">
        <Image
          className="w-20rem"
          src={product.productImg}
          width={150}
          height={20}
          alt="img"
        />
      </div>

      {/* TITLE AND DESCRIPTION  */}
      <div className="text-left m-[1rem] overflow-hidden">
        <div className="font-semibold text-[1.1rem] my-[.5rem]">
          {product.productName}
        </div>
        <div>Product ID : {product.productId}</div>
        <div className="font-semibold">PKR {product.productPrice} /-</div>
        <div>{product.productDesc}</div>
      </div>

      <div className="flex flex-wrap items-center justify-between p-[1rem]">
        <div className="text-left w-[70%]">
          <span className="font-semibold">All available variants : </span>
          <table>
            <thead>
              <tr>
                <th className="text-center px-[1rem] border-2 border-stone-500">
                  Size
                </th>
                <th className="text-center px-[1rem] border-2 border-stone-500">
                  Color
                </th>
                <th className="text-center px-[1rem] border-2 border-stone-500">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody >
              {product.productVariants.map((varient, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center pr-[.5rem] border-2 border-stone-500">
                      {varient.size}
                    </td>
                    <td className="text-center pr-[.5rem] border-2 border-stone-500">
                      {varient.color}
                    </td>
                    <td className="text-center pr-[.5rem] border-2 border-stone-500">
                      {varient.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* BUTTON */}
        <div className="text-right">
          <button
            className="bg-black h-[6vh] hover:bg-gray-800 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline my-[1rem]"
            onClick={deleteProduct}
          >
            DeleteProduct
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
