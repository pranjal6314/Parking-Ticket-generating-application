const mongoose=require("mongoose");
// const Schema = mongoose.Schema; 
const Slotschema=new mongoose.Schema({
    // name:{type:mongoose.Schema.Types.ObjectId,ref:"Slot"},
    number:{type:String,required:true},
    type:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    date:{type:Date,default:Date.now}
     
})

module.exports=mongoose.model("Slot",Slotschema);