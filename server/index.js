
import  express  from "express";
import dotenv from "dotenv";
// routes import



// data base connection 

import ConnectDB from './database/connection'

dotenv.config()

const zomato = express();

zomato.use(express.json());

zomato.get("/",(req , res)=>{
    res.status(200).json({success:true , message:"server started"})
});

const Port = 4000;

zomato.listen(Port , ()=>{
   ConnectDB()
   .then(()=>{
    console.log("server start !");
    console.log("database connected !!")
   })
   .catch((error)=>{
       console.log("server is running but database connection failed");
       console.log(error);
   })
});





