import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    }
    ,
    orderDetails: [
        {
            food: { type: mongoose.Types.ObjectId, ref: "foods" },
            quantity: { type: Number, default: 1, required: true },
            payMode : { type : String , required  : true },
            status : { type : String , default : "placed"},
            paymentDetails : {
                itemTotal : { type : Number , required : true },
                promo : {type : Number , required : true },
                tax : {type : Number },
                razorpay_payment_id : {type : String , required : true }
            }
        }
    ]
}, {
    timestamps: true
})

export const OrderModel = mongoose.model("orders", OrderSchema);