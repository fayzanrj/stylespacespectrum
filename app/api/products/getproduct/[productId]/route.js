import Product from "@/models/productModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server"


export const GET = async (req,{params}) => {
    try {
        await connectToDB()
        
        
        // SEARCHING PRODUCT BY PRODUCT ID AS GIVEN IN PARAMS
        const product = await Product.findOne({productId : params.productId})

        // IF NO PRODUCT FOUND
        if(!product){
            return NextResponse.json({
                status : 'failed',
                message : 'No Product found'
            })
        }

        // SENDING RESPONSE I.E. PRODUCT
        return NextResponse.json({
            status : "success",
            message : 'Product found',
            product : product
        })
        
    } catch (error) {
        return NextResponse.json({
            status: "failed",
            message: "Internal Server Error",
          });
    }
}