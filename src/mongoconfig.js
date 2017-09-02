import mongoose from "mongoose";
import config from "./config/config";

export default callback => {
    const db = mongoose.connect(config.mongoURL);
    callback(db);
};