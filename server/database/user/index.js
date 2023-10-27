import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullName : { type : String , required : true },
    email : { type : String , required : true },
    password : String,
    address : [{detail : String , for : String }],
    phoneNumber : [{type : Number}]
},{
    timestamps : true 
}); 
// attachments  
UserSchema.methods.generateJwtTokens = function (){
    return  jwt.sign({user:this._id.toString()},"zomatoApp");
}
// helper function 
UserSchema.statics.findByEmailAndPhone =  async ( {email , phoneNumber})=>{

    const checkUserEmail = await UserModel.findOne({email});
    const checkUserPhone = await UserModel.findOne({phoneNumber});

    if(checkUserEmail || checkUserPhone){
        throw new Error("user already exist..");
    }
    return false;
}
UserSchema.statics.findByEmailAndPassword =  async ({email , password})=>{

    const user = await UserModel.findOne({email});
    if (!user) {
        throw new Error(" user not found");
    }
    // compair password 

    const doesExist = await bcrypt.compare(password , user.password);
    // if
    if(!doesExist) throw new Errow("invalid  credintials !!!");

    return user;
}

UserSchema.pre("save", function(next){
    try {
        const user = this;

        if (!user.isModified('password')) {
            return next();
        }

        bcrypt.genSalt(8 , (error , salt)=>{
            if(error) return next(error);

            bcrypt.hash( user.password , salt , (error , salt)=>{
                if(error)  return next(error);
// assigning hash password 
                user.password = hash;

                return next();
            })
        })
    } catch (error) {
         next(error);
    }
});

export const UserModel = mongoose.model( " users" , UserSchema)