import express from "express";
import UserModel from "../../database/allModel";

const Router = express.Router();

// Rout   : /
// decrpt : get all authorised user data
// param  : none 
// Access : public 
// method : get

Router.get('/', async (req , res )=>{

    try {
        const {email , fullName ,phoneNo , address} = req.params;
    } catch (error) {
        return res.status(500).json({error : error.message});
    }

     
})

export default Router;