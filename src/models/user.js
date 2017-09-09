import mongoose from "mongoose";

let Schema = mongoose.Schema;

let User = new Schema({
    username: String,
    email: String,
    appID: String,
    password: String,
    access_token: String,
    groups: [{type: Schema.Types.ObjectId, ref: "Group"}],
    dibs: [{type: Schema.Types.ObjectId, ref: "Dib"}]
});

module.exports = mongoose.model("User",User);