const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{ type :String, reguire:true},
    address : { type:String, require:true},
    IFSC:{ type : String, require:true},
    MICR : { type : Number, require:true},
    
},{
    createdAt :false,
    updatedAt:true,
})

module.exports = mongoose.model("Branch",userSchema);