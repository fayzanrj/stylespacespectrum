import Product from "@/models/productModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server"


export const GET = async (req,{params}) => {
    try {
        await connectToDB()
        
        console.log(params.madefor)
        // SEARCHING PRODUCT BY PRODUCT ID AS GIVEN IN PARAMS
        const products = await Product.find({productMadeFor : params.madefor})

        // IF NO PRODUCT FOUND
        if(!products){
            return NextResponse.json({
                status : 'failed',
                message : 'No Products found'
            })
        }

        // SENDING RESPONSE I.E. PRODUCT
        return NextResponse.json({
            status : "success",
            message : 'Products found',
            product : products
        })
        
    } catch (error) {
        return NextResponse.json({
            status: "failed",
            message: "Internal Server Error",
          });
    }
}
