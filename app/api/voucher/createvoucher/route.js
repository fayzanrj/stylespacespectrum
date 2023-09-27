 import Voucher from "@/models/voucherModel";
import { connectToDB } from "@/utilities/database";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    try {
        await connectToDB()

        // GETTING VOUCHER BODY
        const reqBody = await req.json()
        // FINDING IF VOUCHER EXISTS ALREADY
        const voucherExists = await Voucher.findOne({voucherCode : reqBody.voucherCode})
        
        // IF VOUCHER EXISTS
        if(voucherExists){
            return NextResponse.json({
                status : 'failed',
                message : 'Voucher already exists'
            })
        }

        // CREATING NEW VOUCHER
        const voucher = await Voucher.create({
            voucherCode : reqBody.voucherCode,
            desc : reqBody.desc,
            quantity : reqBody.quantity,
            discount : reqBody.discount
        })

        // IF VOUCHER IS NOT CREATED
        if(!voucher){
            return NextResponse.json({
                status: "failed",
                message: "Internal Server Error",
              });
        }


        //SENDING NEWLY CREATED VOUCHER BACK
        return NextResponse.json({
            status : 'success',
            message : 'Voucher created succesfully'
        })

    } catch (error) {
        return NextResponse.json({
            status: "failed",
            message: "Internal Server Error",
          });
    }
}