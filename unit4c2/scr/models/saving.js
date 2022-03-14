const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    account_number:{ type :String, reguire:true,},
    balance : { type:Number, require:true},
    interest:{ type : Number, require:true},

    
},{
    createdAt :false,
    updatedAt:true,
})

module.exports = mongoose.model("savingaccs",userSchema);