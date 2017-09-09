import User from "../models/user";
import bcrypt from "bcrypt-nodejs";

export const validateUser = (args) => {
    return User.findById(args.uid, (err,user) => {
        console.log(user);
        if (user) {
            console.log("user was found");
            return user
        } else {
            console.log("user does not exist");
            return null
        }
    }).then(user => {
        if (user.access_token == args.access_token) {
            return user
        } else {
            return null
        }
    })
}