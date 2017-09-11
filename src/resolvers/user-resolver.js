import User from "../models/user";
import Group from "../models/group";
import mongoose from "mongoose";

export const user = (root,args) => {
    let id = root ? root.uid : args.uid
    return User.findById(id, (err,user) => {
        if (user) {
            console.log("user was found");
            return user
        } else {
            console.log("user does not exist");
            return null
        }
    }).then(user => user);
}