import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Group = new Schema({
    appID: String, 
    name: String,
    desc: String
})

module.exports = mongoose.model("Group",Group);