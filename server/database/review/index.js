import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    
},{
    timestamps : true 
})

export const ReviewModel = mongoose.model( " reviews " , ReviewSchema)