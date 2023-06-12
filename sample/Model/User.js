const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    shop_name :{type:String,unique:true,require:true},
    first_name :{type:String,require:true},
    last_name :{type:String,},
    email :{type:String,unique:true,require:true},
    phone_number :{type:Number,require:true},
    password :{type:String,require:true},
    otp:{type:Number},
    otpVerify:{type:Boolean,deafault:false},
    otpTimeStamp:{type:Number}
    
})
const User = mongoose.model('User',UserSchema)
module.exports = User