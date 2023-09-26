import React from 'react'

const AllOrders = () => {
  const item = {
    productDesc:
      "vori good shoes, ansa klaks jasia hhh ashaisiu hasgavs hbsahas ooooiajsiaj jsajasioiijasisj",
    productId: "1",
    productName: "Shoes",
    productPrice: "120",
    variants: [
      { color: "red", size: "L", quantity: "10" },
      { color: "purple", size: "L", quantity: "10" },
      { color: "purple", size: "S", quantity: "10" },
      { color: "voilet", size: "XL", quantity: "3" },
      { color: "orange", size: "XL", quantity: "0" },
      { color: "yellow", size: "S", quantity: "5" },
      { color: "red", size: "S", quantity: "33" },
      { color: "pink", size: "S", quantity: "33" },
      { color: "red", size: "M", quantity: "44" },
      { color: "blue", size: "M", quantity: "1" },
      { color: "blue", size: "L", quantity: "1" },
      { color: "green", size: "2XL", quantity: "1" },
      { color: "pink", size: "2XL", quantity: "1" },
      { color: "orange", size: "2XL", quantity: "1" },
    ],
  };
  return (
    <div className="bg-white w-full h-full text-left shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
      {/* HEADING */}
      <h3 className="text-center text-[2rem] mb-[.6rem] font-bold">
        Create a voucher
      </h3>

{/* ITEM */}
    <div className='w-full bg-red-400'>
      <div>
        
      </div>
    </div>

    </div>
  )
}

export default AllOrders