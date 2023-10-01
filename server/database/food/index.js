
import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isVeg : { type : Boolean , required : true },
    isContainsEgg : { type : Boolean , required : true},
    catagory : { type : String , required : true },
    photos : { type : mongoose.Types.ObjectId , ref : "images"},
    price : {type : Number , default: 150  , required : true }, 
    addOns : [ { type : mongoose.Types.ObjectId , ref : "foods"}],
    restaurent : { type : mongoose.Types.ObjectId , ref:"restaurents" , required : true},
}, {
    timestamps: true
})

export const FoodModel = mongoose.model('foods', FoodSchema)