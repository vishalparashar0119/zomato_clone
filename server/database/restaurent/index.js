import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name : { type : String , required : true },
    city : { type : String , required : true },
    address : {type : String , required : true },
    mapLocation : {type : String , required : true },
    cusine : [String], // element in this array will have type of string ,
    restaurantTime : String, // if have only one field we can write like this 
    contactNumber : Number,
    website : String , 
    popularDishes : [String],
    averageCost : Number , 
    aminities : [String],
    menuImages : {
        type : mongoose.Types.ObjectId,
        ref : 'images',
    },
    menue : {
        type : mongoose.Types.ObjectId,
        ref : "menus"
    },
    review:{
        type : mongoose.Types.ObjectId,
        ref : "reviews"
    },
    photos : { type : mongoose.Types.ObjectId , ref : "images"}
},{
    timestamps: true
})

export const RestaurantModel = mongoose.model("restaurants" , RestaurantSchema);