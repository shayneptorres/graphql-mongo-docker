import mongoose from "mongoose";

let Schema = mongoose.Schema;

let User = new Schema({
    name: String,
    email: String
});

module.exports = mongoose.model("User",User);