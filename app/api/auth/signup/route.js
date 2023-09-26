import User from "@/models/userModel";
import { connectToDB } from "@/utilities/database";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const POST = async (request) => {
  try {
    await connectToDB();

    // DESTRUCTUTRING DATA FROM REQUEST
    const { email, password, name } = await request.json();
    if (email == "" || name == "" || password == "") {
      return new Response("DATA IS MISSING");
    }

    // CHECKING IF A USER EXISTS ALREADY AND ACTING ACCORDINGLY
    let userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return new Response({
        status: "failed",
        msg: "Sorry! A user with this email already exists",
      });
    }

    //creating hash of entered password and adding salt to it, then storing it in DATABASE and giving the user an AUTH TOKEN
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);
    const user = await User.create({
      name: name,
      email: email,
      password: secPass,
    });

    const data = {
      user : {
        id : user.id
      }
    }

    // GETTING USER WEBTOKEN
    const authToken = await jwt.sign(data , process.env.JWT_SECRET)
    
    const responseData = {
      name : user.name,
      email : user.email,
      pic : user.picture,
      authToken : authToken
    }
    return new Response(JSON.stringify(responseData));

  } catch (error) {
    return new Response("Failed to fetch", { status: 500 });
  }
};
