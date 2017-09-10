import Dib from "../models/dib";
import Group from "../models/group";
import mongoose from "mongoose";
import {validateUser} from "./userValidation";

export const dib = (root,args) => {
    return Dib.findById(args.id, (err,dib) =>{
        if (err){
            return {
                data:{},
                success:false
            }
        }

        return dib
    }).then(dib => dib);
}

export const dibs = (root,args) => {
    return validateUser(args).then(user => {
        if (user) {
            let user = user
            return Dib.find( { user: user } ,(dibs,err) => {
                if (err) {
                    return [];
                }
                return dibs;
            }).then((dibs) => dibs );
        }
    })
}

export const dibsForUser = (root,args) => {
    let id = root.id
    console.log(id);
    let objID = new mongoose.Types.ObjectId(id)
    
    return Dib.find({ user: { $all: objID  }},(err,dibs) => {
        if (err) {
            return null
        } else {
            return dibs
        }
    }).then(dibs => dibs)
}

export const dibsForGroup = (root,args) => {
    return Dib.find({group:root.id},(err,dibs) =>{
        if (err){
            return null;
        }

        return dibs;
    }).then(dibs => dibs);
}

// createDib(uid: String, groupId: String, access_token: String, title: String, desc: String, url: String) : Dib
export const createDib = (root,args) => {
    return validateUser(args).then(user => {
        if (user){
            let newDib = new Dib();
            newDib.title = args.title;
            newDib.desc = args.desc;
            newDib.user = user;
            newDib.url = args.url;
            newDib.group = args.groupId;
            user.dibs.push(newDib);
            user.save();
            return Group.findById(args.groupId,(group,err) => {
                if (err) {
                    console.log("There was an error finding the group");
                    return null
                }
                return group;
            }).then((group) => {
                group.dibs.push(newDib);
                group.save();
                newDib.group = group;
                newDib.groupId = group.id;
                return newDib.save(err => {
                    if (err) {
                        return null
                    }
            
                    return newDib;
                }).then(dib => dib);
            })    
        } else {
            return null
        }
    })
}