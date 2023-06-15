import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { error } from 'console';


const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password:{ type : String},
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNo: [{ type: Number }]

}, {
    timestamps: true,
});
// attachment 
// methods are the function which is connected to the schema so we can use this operator in it 
// while static are sepearte function so we have to  pass parameter in it in the form of 
// objects
userSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "zomatoApp")
}

userSchema.statics.findByEmailAndPhoneNo = async ({ email , phoneNo }) => {

    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhoneNo = await UserModel.findOne({ phoneNo });

    if (checkUserByEmail || checkUserByPhoneNo) {
        throw new error("user already exist ...!");
    }

    return false;
};

userSchema.statics.findByEmailAndPassword = async ({ email, password }) => {

    const user = await UserModel.findOne({ email });

    if (!user) {
        throw new error("user not exist...!");
    }

    // compait password 

    const doesHavePassword = await bcrypt.compare(password, user.password);

    if (!doesHavePassword) {
        throw new error("invalid credential !!!");
    }

    return user;
};
// encryption of data 
// pre  function is use for encryption and  save function is similar to the create state
// next function is like do next think after encrypt the password
userSchema.pre("save", function (next) {

    const user = this;
    // is password is modified not means sign-up is done by google 
    if (!user.isModified('password')) {
        return next();
    }
    // bcrypt saulting 
    // hash can convert password but it cannot be that strong so we need sauting to repeatt
    // it again and again 
    // sault is like a loop you have to tell them how many time you have to go for it 
    // it will take encrypted data and encrypt it again and again until its itatration is 
    // over
    // saulting happen first and than hahing happen
    bcrypt.genSalt(8, (error, salt) => {

        if (error) {
            return next(error);
        }
        // hashing 
        bcrypt.hash(user.password, salt, (error, hash) => {

            // if error
            if (error) {
                return next(error);
            }
           
            // hash the password
            user.password = hash;
        });
    });
}); 


export const UserModel = mongoose.model("users", userSchema)