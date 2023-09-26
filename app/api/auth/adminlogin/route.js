import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // DESTRUCTUTRING DATA FROM REQUEST
    const { username, password } = await req.json();
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
        return NextResponse.json({
            status : 'success',
        })
    }
  } catch (error) {
    return NextResponse.send({
        status: "Failed",
        message: "Internal Server Error",
      });
  }
};
