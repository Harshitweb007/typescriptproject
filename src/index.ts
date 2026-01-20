import express from "express";
import { Usermodel } from "./db.js";
const app = express();
app.use(express.json());
import jwt from "jsonwebtoken";
const jwtsecret="maine tera naam dil";
import { auth } from "./middlreware.js";
import { Contentmodel } from "./db.js";
app.post("/signup", async(req, res) => {
    
    const{username,passward}=req.body
    try{
    await Usermodel.create(
        {
            username:username,
            passward:passward
        }
    )
}catch(e){
    res.send("User already exist");

}
    res.send("User Signedup Sucessfully");

    
});
app.post("/signin", async(req, res) => {
    const {username,passward}=req.body;
   const exist= await Usermodel.findOne({username,passward})
   if(exist){
    const token= jwt.sign({id:exist._id},jwtsecret)
    return res.json({token})
   }
   else{
 return res.status(403).json("incorrect credentials");
   }
});

app.get("/content",auth,async (req, res) => {
      const {title,link}=req.body
      await Contentmodel.create({
        title:title,
        link:link,
        tags:[],
        //@ts-ignore
        UserId:req.userId
        
      })
      return res.json({
        messgae:"Content is added succesfully"
      })

    
});
app.delete("/content", (req, res) => {
    
});
app.post("/brain",(req,res)=>{

})
app.get("/brain/:sharelink",(req,res)=>{

})

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
