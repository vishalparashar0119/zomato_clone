import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    images : [ {
        location : { type : String , requires : true }
    },],
    
},{
    timestamps : true 
})

export const ImageModel = mongoose.model("images" , ImageSchema);