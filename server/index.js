
import  express  from "express";
import dotenv from "dotenv";
import passport from "passport";

// import the passport for to make some rout passport
import privateRoutConfig from "./config/rout.config"

// routes import
import Auth from "./api/auth";
import Food from "./api/food";
import Rest from "./api/restaurant";
import User from "./api/user";
// data base connection 
import ConnectDB from './database/connection'

dotenv.config()

const zomato = express();

// adding additonal passport config
privateRoutConfig(passport);


zomato.use(express.json());
zomato.use(passport.initialize());

zomato.get("/",(req , res)=>{
    res.status(200).json({success:true , message:"server started"})
});
zomato.use("/auth",Auth);
zomato.use("/food",Food);
zomato.use("/reataurant",Rest)

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