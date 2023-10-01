import express from 'express'
import dotenv from 'dotenv'
import connectDb from './database/connecton'

const zomato = express();
dotenv.config();
zomato.use(express.json());

zomato.get('/',(req , res)=>{
     res.json({message: "server is running"})
})
 const port = 4000;

 // server is listning 
zomato.listen(port , 
    connectDb()
    .then(()=>{
        console.log('database connect successfully');
        console.log(` server running on port ${port}`);
    }).catch((error)=>{
        console.log('server is runnig but database is not connected');
        //console.log(error)
    }))