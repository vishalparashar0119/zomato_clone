import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({

     user : {type : mongoose.Types.ObjectId
        ,ref: "users"},

        orderDetails : [{
             food : [ 
                {
                      details :{type : mongoose.Types.ObjectId ,ref: "foods"},
                      quantity : {type : Number  , required: true },
                }   ],
             payMode : {type : String , required : true },
             status : {type : String , default : "placed "},
             paymentDetail : {
                itemTotal : {type : Number , require : true },
                promo : {type : Number , required : true},
                tax : {type : number , required: true},
                razorpay_paymet_id : {type : String , required : true }
             }


        }],



},{
    timestamps: true,
});

 export const OrderModel = mongoose.model("orders", orderSchema);