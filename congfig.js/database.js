const mongoose=require("mongoose");
require("dotenv").config(); 
 function dbConnect(){

    mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true})
                    .then(()=>{
                         console.log("conection sucessfull");
                    }).catch(()=>{
                         console.log("Something went wrong");
                         process.exit(1);
                    })


}

module.exports={dbConnect};
