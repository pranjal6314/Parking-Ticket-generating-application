const mongoose =require("mongoose");
const mongoURL="mongodb://localhost:27017/parking";

const connectMongos=()=>{

    mongoose.connect(mongoURL,()=>{
        console.log("connected to mongo");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=connectMongos;