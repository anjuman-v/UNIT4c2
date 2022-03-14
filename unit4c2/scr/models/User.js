const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{ type :String, reguire:true},
    middleName : { type:String, require:true},
    lastName:{ type : String, require:true},
    age : { type : Number, require:true},
    email:{ type : String, require:true},
    gender:{ type :String, rquire:true,default:"female"},
    type:{type : String, require:true, default:"customer"},
},{
    createdAt :false,
    updatedAt:true,

});

module.exports = mongoose.model("users",userSchema);