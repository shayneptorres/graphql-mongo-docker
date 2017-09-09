import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Dib = new Schema({
    title: String,
    desc: String,
    uid: String,
    url: String,
    group: {type: Schema.Types.ObjectId, ref: "Group"}
});

module.exports = mongoose.model("Dib",Dib);