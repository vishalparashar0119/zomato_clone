import mongoose from 'mongoose'

const menuSchema = new mongoose.Schema({
 
    menu: [{
        name:{type : String , required : true },
        items:[{
            type : mongoose.Types.objectId,
            ref : 'foods',
        }]

    }],
    recomended:[{
         type : mongoose.Types.Schema,
         ref: 'food',
         unique: true ,
    }]


}, {
    timestamps: true
})


export const MenuModel = mongoose.model("menus", menuSchema);
