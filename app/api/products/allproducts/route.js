import Product from "@/models/productModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();

    const allProducts = await Product.find();

    return NextResponse.json({
      status: "success",
      message: "Product found",
      products : allProducts
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};
