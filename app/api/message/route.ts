import ConnectDb from "@/lib/ConnectDb";
import Message from "@/models/message.model";
import { NextResponse } from "next/server";

export  async function POST(req:Request){
   try {
     await ConnectDb();
     const {name,email, message}=await req.json();
     if (!name || !email || !message) {
         return NextResponse.json({status: 400, message: "Please fill all the fields"});}

         
     const newMessage = new Message({name, email, message});
     await newMessage.save();
     return NextResponse.json({status: 200, message: "Message sent successfully"});
   } catch (error) {
    console.log(error);
    return NextResponse.json({status: 500, message: "Internal server error"});
   }
}