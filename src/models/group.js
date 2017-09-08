import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Group = new Schema({
    appID: String, 
    name: String,
    desc: String,
    users: [{type: Schema.Types.ObjectId, ref: "User"}],
    dibs: [{type: Schema.Types.ObjectId, ref: "Dib"}] 
})

module.exports = mongoose.model("Group",Group);