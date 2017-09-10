import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Dib = new Schema({
    title: String,
    desc: String,
    url: String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    group: {type: Schema.Types.ObjectId, ref: "Group"}
});

module.exports = mongoose.model("Dib",Dib);