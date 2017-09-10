import Group from "../models/group";
import {validateUser} from "./userValidation";
import mongoose from "mongoose";

export const createGroup = (root,args) => {
    return validateUser(args).then(user => {
        if (user) {
            let rando1 = Math.floor(Math.random() * 999) + 100;
            let rando2 = Math.floor(Math.random() * 999) + 100;
            let rando3 = Math.floor(Math.random() * 999) + 100;
            let newGroup = new Group();
            newGroup.name = args.name;
            newGroup.desc = args.desc;
            newGroup.appID = `${args.name}-${rando1}.${rando2}.${rando3}`;
            newGroup.dibs = [];
            newGroup.users = [user];
            return newGroup.save((err) => {
                if (err) {
                    return null;
                }
                user.groups.push(newGroup);
                return user.save((err) => newGroup);
            }).then((group) => group);
        } else {
            return null
        }
    })
}

export const group = (root,args) => {
    let id = args.id
    return Group.findById(id,(group,err) => {
        if (err) {
            console.log("There was an error finding the group");
            return null;
        }

        return group;
    }).then(group => group);
}

export const groupsForUser = (root,args) => {
    let id = root.id
    let objID = new mongoose.Types.ObjectId(id)
    return Group.find( { users: { $all: [ objID ] } } ,(groups,err) => {
        if (err) {
            return [];
        }
        return groups;
    }).then((groups) => groups );
}

export const groupForDib = (root,args) => {
    return Group.findById(root.group,(group,err) => {
        if (err) {
            return null
        }
        return group
    }).then(group => group);
}

export const groupsByName = (root,args) => {
    let sanitizedName = args.name.replace(" ", "")
    if (sanitizedName == "") { 
        return []
    }
    return Group.find({name: new RegExp(args.name, 'i')}, (groups,err) => {
        if (err) {
            console.log("There was an error finding groups");
            return null;
        }
        return groups
    }).then(groups => groups);
}
