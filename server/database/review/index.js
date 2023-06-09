import mongoose  from "mongoose";

const reviewSchema = new mongoose.Schema({

    user :{type : mongoose.Types.ObjectId , ref : "users"},
    food : {type : mongoose.Types.ObjectId , ref : "foods"},
    restaurant : {type : mongoose.Types.ObjectId , ref : "restaurants "},
    rating : {type : Number , required: true }, 
    reviewText : {type : String , required : true },
    isRestaurant : Boolean,
    isFood : Boolean,
    photos : {
        type : mongoose.Types.ObjectId , 
        ref : "images"
    }

},{
    timestamps: true ,
});


export const ReviewModel = mongoose.model("reviews", reviewSchema);