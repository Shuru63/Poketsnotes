const mongoose = require("mongoose");
const Creategroup = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true }
})

module.exports=mongoose.model("poketnotesgroup",Creategroup)