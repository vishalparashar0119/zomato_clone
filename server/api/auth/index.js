import express from "express";

import { UserModel } from "../../database/user"

const Router = express.Router();

 
Router.post("/signup", async (req, res) => {

    try {
        
        await UserModel.findByEmailAndPhoneNo(req.body.credential);
        const newUser = await UserModel.create(req.body.credential);
        const token = await newUser.generateJwtToken();

        return res.status(200).json( {token ,status : "success"});
    } catch (error) {
          return res.status(500).json({error : error.message});
    }

});

Router.post("/signin", async (req, res) => {
    try{

       const user =  await UserModel.findByEmailAndPassword(req.body.credential);
       const token = user.generateJwtToken();
       return res.status(200).json({token , message:"success"});
    }catch(error){
        return res.status(500).json({error:error.message})
    }

});

export default Router;
