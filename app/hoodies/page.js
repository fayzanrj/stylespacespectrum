import CardItem from "@/components/cardItem";
import SearchBar from "@/components/searchBar";
import React from "react";

export const metadata = {
  title: "Hoodies",
  descriptions: "Hoodies Page",
};
const Hoodies = async () => {
  const response = await fetch(
    `${process.env.Host}/api/products/category/hoodie`, {next : {revalidate : 600}}
  );
  const res = await response.json();
  const products = await res.product;

  return (
    <>
      <SearchBar />
      <div className="ml-[10vw] mt-[3vh] text-[1.25rem] underline">/ Hoodies</div>
      <div className="w-full pt-[3vh]  min_height flex gap-[1.5rem] justify-center items-center flex-wrap pb-[2rem] px-[1rem]">
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

export default Hoodies;
