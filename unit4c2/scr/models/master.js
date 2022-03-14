const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    balance:{ type :Number, reguire:true},
    
},{
    createdAt :false,
    updatedAt:true,
})

module.exports = mongoose.model("MasterAcc",userSchema);