import express from "express";
import UserModel from "../../database/allModel";
import passport from "passport";
import { get } from "mongoose";

const Router = express.Router();

// Rout   : /
// decrpt : get all authorised user data
// param  : none 
// Access : public 
// method : get

Router.get('/',passport.authenticate("jwt",{session: false}), async (req , res )=>{

    try {
        const {email , fullName ,phoneNo , address} = req.user;
        return res.json({user : {email , fullName,phoneNo,address}});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }

     
});


// Rout   : /:_id
// decrpt : get user data(for the review )
// param  : _id 
// Access : public 
// method : GET

Router.get("/:_id" , async(req , res )=>{
   try {
       const {_id} = req.params;
       const getUser = await UserModel.findBYId(_id);
       
       if (!getUser) {
           return res.status(404).json({error:" user not found "});
        }
        const{fullName} = getUser;
       return res.json({user : {fullName}})
   } catch (error) {
     return res.status(500).json({error:error.message})
   }
   
})


export default Router;