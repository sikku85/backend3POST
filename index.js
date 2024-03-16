const express=require("express")
const app=express();
const cors = require('cors');
const {dbConnect} =require("./congfig.js/database")


const blog=require("./routes/blogs")
app.use(cors());
app.use(express.json())
app.use("/api/v1",blog)

dbConnect()


app.listen(3000,()=>{
    console.log(" app is running")
})

app.get("/",(req,res)=>{
    res.send("Hello jii kaise ho")
})