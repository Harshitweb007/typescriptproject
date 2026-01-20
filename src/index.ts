import express from "express";

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
    
});
app.post("/signin", (req, res) => {
    
});
app.get("/content", (req, res) => {
    
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
