import User from "../../models/user";
import mongoose from "mongoose";

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