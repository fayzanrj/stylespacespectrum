import Voucher from "@/models/voucherModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server";


export const PUT = async (req , {params}) => {
    try {
        await connectToDB()

        const reqBody = await req.json()

        // FINDING VOUCHER AND UPDATING
        const voucher = await Voucher.findOneAndUpdate({voucherCode : params.vouchercode}, {$set : {
            voucherCode : reqBody.voucherCode,
            desc : reqBody.desc,
            quantity : reqBody.quantity
        }})

        // IF NO VOUCHER FOUND
        if(!voucher){
            return NextResponse.json({
                status : "failed",
                message : 'No voucher found'
            })
        }

        return NextResponse.json({
            status : 'success',
            message : "Voucher updated",
        })
        
    } catch (error) {
        return NextResponse.json({
            status: "failed",
            message: "Internal Server Error",
          });
    }
}