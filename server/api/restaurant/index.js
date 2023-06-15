
import express from "express"

import {RestaurantModel} from "../../database/allModel"

const Router = express.Router();
// documentation
//  Rout   : /
//  Des    : get all  restaurnat on the basis of city
//  Param  : none
//  Access : public
//  Method : get

Router.get('/', async(req , res)=>{
  try {

    // we will do it in the form of query 
    // https://localhost:4000/restaurant/?city = ncr  
       const {city} = req.query;
       const restaurants = await RestaurantModel.find({city});

       if(restaurants.length === 0)
       {
        return resjson({error:`not found in ${city}`})
       }
       return res.json({restaurants});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

// documentation
//  Rout   : /:_id
//  Des    : get restaurant details on the basis of the particular _id
//  Param  : city
//  Access : public
//  Method : get

Router.get('/:_id', async (req , res )=>{
    
    const {_id} = req.params;
    const restaurant = await  RestaurantModel.findById(_id);

    if(!restaurant)
    {
        return res.status(404).json({error:"not found"})
    }

    return res.json({restaurant});
});

// documentation
//  Rout   : /search/:searchString
//  Des    : get restaurant details on the basis of  particular searchString
//  Param  : searchString
//  Access : public
//  Method : get

Router.get('/search/:searchString', async (req , res )=>{
        
   try {
       const {searchString} = req.params;
       const restaurants = await RestaurantModel.find({
          name : {$regex : searchString , $options : "i"},
       });

       if (!restaurants) {

        return res.status(404).json({error : `not found ${searchString}`})
        
       }

       return res.json({restaurants});
    
   } catch (error) {
     return res.status(500).json({error:error.message});
   }
});
export default Router;