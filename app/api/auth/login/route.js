import User from "@/models/userModel";
import { connectToDB } from "@/utilities/database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    // CONNECTING WITH DATABASE
    connectToDB();

    // DESTRUCTUTRING DATA FROM REQUEST
    const { email, password } = await request.json();

    // CHECKING IF A USER EXISTS ALREADY AND ACTING ACCORDINGLY
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return NextResponse.json({
        status: "Failed",
        message: "Credentials does not match",
      });
    }

    // MATCHING PASSWORDS THAT THE USER ENTERED WITH THE ENTERED EMAIL'S PASSWORD
    const credentialsMatch = await bcrypt.compareSync(
      password,
      userExists.password
    );

    // IF PASSWORDS DOESNT MATCH
    if (!credentialsMatch) {
      return NextResponse.json({
        status: "Failed",
        message: "Credentials does not match",
      });
    }

    // DATA OBJECT FOR WEBTOKEN
    const data = {
      user: {
        id: userExists.id,
      },
    };

    // GETTING USER WEBTOKEN
    const authToken = await jwt.sign(data, process.env.JWT_SECRET);

    //SETTING RESPONSE AS OBJECT
    const responseData = {
      name: userExists.name,
      email: userExists.email,
      pic: userExists.picture,
      authToken: authToken,
    };

    // SENDIG RESPONSE
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    return NextResponse.send({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};
