import CardItem from '@/components/cardItem';
import SearchBar from '@/components/searchBar';
import React from 'react'

const Men = () => {
    const products = undefined
  return (
    <>
    <SearchBar />
    <div className="pl-[10vw] mt-[3vh] text-[1.25rem] underline">
      /Men
    </div>
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
  )
}

export default Men