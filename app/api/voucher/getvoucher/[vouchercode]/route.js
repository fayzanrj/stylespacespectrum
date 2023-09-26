import Voucher from "@/models/voucherModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server";

export const GET = async (req , {params}) => {
    try{
        await connectToDB()
        
        // FINDING VOUCHER
        const voucher = await Voucher.findOne({voucherCode : params.vouchercode})

        // IF NO VOUCHER FOUND
        if(!voucher){
            return NextResponse.json({
                status : "failed",
                message : 'No voucher found'
            })
        }

        // IF VOUCHER FOUND
        return NextResponse.json({
            status : 'success',
            message : "Voucher found",
            voucher : voucher
        })

    } catch (error){
        return NextResponse.json({
            status: "failed",
            message: "Internal Server Error",
          });
    }
}