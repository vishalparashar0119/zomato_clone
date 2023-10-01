import mongoose from "mongoose";

const MenueSchema = new mongoose.Schema({
    menue : [
        {
            name : { type : String , required : true },
            items : { type : mongoose.Types.ObjectId , ref : " foods"},
        }
    ]
    , recommend : [ {
        type : mongoose.Types.ObjectId , ref : "foods ",unique : true 
    }]
},{
    timestamps : true 
})

export const  MenueModel = mongoose.model( "menues" , MenueSchema);