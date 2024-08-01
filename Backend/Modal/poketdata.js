const mongoose = require("mongoose");
 const createPoketData=new mongoose.Schema({
    groupId: mongoose.Schema.Types.ObjectId,
    content: String,
    createdAt: { type: Date, default: Date.now }
 })

 module.exports=mongoose.model("poketdatas", createPoketData)