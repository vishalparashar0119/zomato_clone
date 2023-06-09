import express from "express";

import { UserModel } from "../../database/allModel"

const Router = express.Router();


Router.post("/signup", async (req, res) => {

    try {

        await UserModel.findByEmailAndPhoneNo(req.body.crediential);
        const newUser = await UserModel.create(req.body.crediential);
        const token = await newUser.createJwtToken();

        return res.status(200).json(token , {status : "success"});
    } catch (error) {
          return res.status(500).json({error : error.message});
    }

});

Router.post("signin", async (req, res) => {

});

export default Router;
