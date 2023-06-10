
import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({

    image: [
        {
        location: { type: String, required: true }, 
        }
],

}, {
    timestamps: true
})


export const ImageModel = mongoose.model("images",imageSchema);