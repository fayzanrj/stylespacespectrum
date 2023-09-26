import Product from "@/models/productModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server";

export const GET = async (req , {params}) => {
    try {
        await connectToDB();

        const keyword = params.query ? {
            $or : [
                {productName : {$regex : params.query , $options : "i"}},
                {productId : {$regex : params.query , $options : "i"}},
            ]
        } : {};

        const products = await Product.find(keyword)

        return NextResponse.json(products)
        
    } catch (error) {
        return NextResponse.json({
            status: "failed",
            message: "Internal Server Error",
          });
    }
}