import mongoose, { Schema } from "mongoose";

const userMessage=new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100,  
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/      
    },
    message:{
        type:String,
        required:true,
        minlength:10,
        maxlength:500
    }
},{timestamps:true})
const Message= mongoose.models.Message || mongoose.model("Message",userMessage)

export default Message;