import CardItem from "@/components/cardItem";
import SearchBar from "@/components/searchBar";
import React, { memo } from "react";
import { Cinzel ,} from 'next/font/google'
import bg from "@/public/home-bg.png";

export const metadata = {
  title: "Style Space Spectrum - Buy Premium Clothes",
  descriptions:
    "Shop the latest trends at Style Space Spectrum. Find high-quality clothes for every style. Discover a wide range of high-quality products, from T-Shirts to Hoodies. Find deals and discounts that fit your style today! Discover exclusive deals and fast shipping. Elevate your shopping experience today!",
};

const cinzel = Cinzel({ weight : "400" , subsets : ['latin'] })


async function getData() {
  const res = await fetch(`${process.env.Host}/api/products/allproducts`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.products
}
const Home = async () => {
  const products = await getData();

  return (
    <>
      <SearchBar />
      <div  className="w-full h-[80vh] max-h-[80vh] mt-[1vh] text-center overflow-hidden pt-[40%] md:pt-[20%] lg:pt-[10%] select-none">
        <div className={`${cinzel.className} text-[1.9rem] md:text-[3rem] lg:text-[4rem]`}>Style Space Spectrum</div>
        <div className="font-mono lg:text-[1.6rem]">SHOP. DISCOVER. SAVE</div>
      </div>
      <div className="w-full pt-[10vh]  min_height flex gap-[1.5rem] justify-center items-center flex-wrap pb-[2rem] px-[1rem]">
        {products ? (
          products.map((product, index) => {
            return (
              <CardItem
                key={index}
                title={product.productName}
                desc={product.productDesc}
                price={product.productPrice}
                image={product.productImg}
                id={product.productId}
                variants={product.productVariants}
              />
            );
          })
        ) : (
          <div>No products to show</div>
        )}
      </div>
    </>
  );
};

export default memo(Home);
