import express, { response }  from "express";

import {FoodModel, UserModel} from "../../database/allModel"

const Router = express.Router();

// documentation
//  Rout   : /:_id
//  Des    : get food on the bases of id
//  Param  : _id
//  Access : public
//  Method : get

Router.get("/:_id" , async (req , res)=>{

    try {
        const {_id} = req.params;

        const foods = await FoodModel.findById(_id);
        return res.status(200).json({foods});
    } catch (error) {
        return res.json({error : error.message})
    }
});

// documentation
//  Rout   : /rest/:_id
//  Des    : get all  food  on  the bases of restaurant  id
//  Param  : _id 
//  Access : public
//  Method : get

Router.get('/rest/:_id' , async (res , req ) => {
    try {
         const {_id} = req.params;
         const foods = await FoodModel.find({
            restaurant:_id,
         });

         return res.json({foods});

    } catch (error) {
         return res.status(500).json({error:error.message});
    }
}); 

// documentation
//  Rout   : /rest/:_id
//  Des    : insert food on the basis of restaurant id
//  Param  : _id 
//  Access : public
//  Method : post
// home work

// documentation
//  Rout   : /cat/:category
//  Des    : insert food on the basis of restaurant id
//  Param  : category 
//  Access : public
//  Method : get
// home work

Router.get('/cat/:category',async (res , req)=>{
    try {
           const {category} = req.params;
           const foods = await FoodModel.find({ 
            category :{$regex:category , $options: "i" },
        });

        if(!foods)
        {
            return res.status(404).json({error:`no food match with the ${category}`})
        }

        return res.json({foods})

    } catch (error) {
        return response.status(500).json({error: error.message});
    }
});


export default Router;