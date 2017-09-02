import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Dib = new Schema({
    title: String,
    desc: String,
    uid: String
});

module.exports = mongoose.model("Dib",Dib);