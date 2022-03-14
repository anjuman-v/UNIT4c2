const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    account_number:{ type :Number, reguire:true},
    balance : { type:String, require:true},
    interest_rate:{ type : String, require:true},
    start_date : { type : Number, require:true},
    maturity_date : { type : Number, require:true},
    
},{
    createdAt :false,
    updatedAt:true,
})

module.exports = mongoose.model("fixedrate",userSchema);