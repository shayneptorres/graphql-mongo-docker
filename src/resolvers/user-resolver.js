import User from "../models/user";
import Group from "../models/group";
import mongoose from "mongoose";

export const user = (root,args) => {
    let id = root ? root.uid : args.id
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

export const usersForGroup = (root,args) => {
    let id = root.id
    let objID = new mongoose.Types.ObjectId(id)
    return User.find( { groups: { $all: [ objID ] } } ,(users,err) => {
        if (err) {
            return null;
        }
        return users;
    }).then((users) => users );
}