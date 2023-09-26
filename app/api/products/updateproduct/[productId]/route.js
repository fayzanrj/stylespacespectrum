import Product from "@/models/productModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    await connectToDB();

    const reqBody = await req.json();
    console.log(reqBody);
    // FINDING PRODUCT AND UPDATING
    const product = await Product.findOneAndUpdate(
      { productId: params.productId },
      {
        $set: {
          productId: reqBody.productId,
          productName: reqBody.productName,
          productDesc: reqBody.productDesc,
          productPrice: reqBody.productPrice,
          productCategory: reqBody.productCategory,
          productVariants: await JSON.stringify(reqBody.productVariants),
        },
      }
    );
    console.log("hii");

    // IF NO PRODUCT FOUND
    if (!product) {
      return NextResponse.json({
        status: "failed",
        message: "No product found",
      });
    }

    return NextResponse.json({
      status: "success",
      message: "Product updated",
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};
