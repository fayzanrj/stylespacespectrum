import AddToCartBtn from "@/components/addToCartBtn";
import BuyNowBtn from "@/components/buyNowBtn";
import Varients from "@/components/variants";
import Image from "next/image";
import React, { memo } from "react";

export const metadata = {
  title: "Product",
  descriptions: "Product Page",
};

const Product = async ({ params }) => {
  const response = await fetch(
    `${process.env.Host}/api/products/getproduct/${params.slug}`,{next : {revalidate : 120}}
  );
  const res = await response.json();
  const product = await res.product;
  const sizes = [];
  const colors = [];

  try {
    if (product.productVariants) {
      product.productVariants = await JSON.parse(product.productVariants);

      product.productVariants.forEach((variant) => {
        if (!sizes.includes(variant.size) && variant.quantity > 0) {
          sizes.push(variant.size);
        }
        if (!colors.includes(variant.color) && variant.quantity > 0) {
          colors.push(variant.color);
        }
      });
    }
  } catch (error) {console.log(error)}

  return (
    <div className="min_height w-full flex flex-col justify-center items-center p-[1rem] pt-[15vh]">
      {product ? (
        <div className="w-full min-h-[30rem] h-fit flex justify-center items-center flex-wrap py-[1rem]">
          {/* IMAGE */}
          <div className="Product_Box h-[25rem] Div_Shadow ">
            <div className="w-full h-[100%] ">
              <Image
                className="w-full h-full object-contain overflow-hidden "
                src={product.productImg}
                priority
                sizes="(max-width: 768px)"
                alt="ProductImg"
                width={200}
                height={10}
              />
            </div>
          </div>

          {/* DETAILS DIV */}
          <div className="Product_Box h-[25rem] Div_Shadow">
            <div className="w-full h-[100%] overflow-hidden px-[1rem] py-[5%]">
              <div className="w-full h-[60%]">
                {/* TITLE */}
                <div className="text-slate-950 text-[1.4rem] font-bold w-full ">
                  {product.productName}
                </div>
                {/* DESCRIPTION */}
                <div className="text-slate-950 text-[1rem] w-full my-[1rem]">
                  {product.productDesc.slice(0, 300)}
                </div>
              </div>
              {/* Price */}
              <div className="font-semibold text-[1.2rem] w-full h-[10%] ">
                PKR {product.productPrice} /-
              </div>
              <div className="w-full h-[30%] flex items-center flex-wrap ">
                {/* productVariants */}
                <Varients
                  sizes={sizes}
                  colors={colors}
                  productVariants={product.productVariants}
                />
                {/* BUTTONS */}
                <div className="w-[30%] h-[100%]  flex flex-col justify-around items-center">
                  {/* ADD TO CART */}
                  <AddToCartBtn product={product} />
                  {/* BUY NOW */}
                  <BuyNowBtn product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center ">
          <p className="text-[1.6rem]">No product found</p>
        </div>
      )}
    </div>
  );
};

export default memo(Product);
