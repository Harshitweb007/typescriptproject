import mongoose, { Model, model,Schema } from "mongoose";

mongoose.connect("mongodb+srv://harshitr451_db_user:QaLVhqDag1bH8Fdm@cluster0.nt6wtb5.mongodb.net/brainly").then(()=>console.log("connected to db"));

const userSchema=new Schema({
    username:{type:String,unique:true},
    passward:{type:String}
})
const ContentSchema=new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'tag'}],
    UserId: {type:mongoose.Types.ObjectId,ref:'user',require:true}


    
})
export const Usermodel=model("user",userSchema)
export const Contentmodel=model("content",ContentSchema)