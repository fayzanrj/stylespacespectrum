import Product from "@/models/productModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectToDB();

    const reqBody = await req.json();
    
    const productExists = await Product.findOne({productId : reqBody.productId})
    if(productExists){
      return NextResponse.json({
        status : 'failed',
        message : 'Product with this ID already exists'
      })
    }

    const product = await Product.create({
      productId: reqBody.productId,
      productName: reqBody.productName,
      productDesc: reqBody.productDesc,
      productPrice: reqBody.productPrice,
      productCategory: reqBody.productCategory,
      productVariants: await JSON.stringify(reqBody.productVariants),
      productImg : reqBody.productImg
    });
    // console.log(reqBody)

    if (!product) {
      return NextResponse.send({
        status: "Failed",
        message: "Internal Server Error",
      });
    }
    

    return NextResponse.json({
      status : 'success',
      message : 'Product added',
      product : product
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};
