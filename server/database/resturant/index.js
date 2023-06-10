import mongoose from "mongoose";

const restauranSchema = new e.Schema({
  
    name : {type : String , required: true },
    city : {type : String , required : true },
    address : {type : String , required : true},
    mapLocation : {type : String , required : true }, 
    cusian:[String],
    restaurantTiming : String , 
    contactNo : Number ,
    website : String,
    popularDishes : String ,
    averageCost : Number, 
    aminities : [string],
    menuImages : {type : e.Types.ObjectId , ref: "images"},
    menue : {type : e.Types.ObjectId , ref: "menus"},
    review : [{type : e.Types.ObjectId , ref : "reviews "}],
    restaurantImage : {type : e.Types.ObjectId , ref : "images"}


  

},{
    timestamps: true,
});

export  const ResturantModel = e.model("restaurants",restauranSchema);