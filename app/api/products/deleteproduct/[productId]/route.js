import Product from "@/models/productModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server";


export const DELETE = async (req, {params}) => {
    try {
        await connectToDB()

        // FINDING PRODUCT AND DELETING
        const product = await Product.findOneAndDelete({productId : params.productId})

        // IF NO PRODUCT FOUND
        if(!product){
            return NextResponse.json({
                status : "failed",
                message : 'No product found'
            })
        }

        return NextResponse.json({
            status : 'success',
            message : "Product deleted",
        })
        
    } catch (error) {
        return NextResponse.json({
            status: "failed",
            message: "Internal Server Error",
          });
    }
}