import axios from "axios";
import User from "../models/user";

export const user = (root,args) => {
    return User.findById(args.id, (err,user) =>{
        if (err) {
            console.log(object);
            return {
                name:"",
                id:"",
                email:""
            }
        }

        return user
    }).then(user => user);
}

export const createUser = (root,args) => {
    let newUser = new User();
    newUser.name = args.name;
    newUser.email = args.email;
    return newUser.save( err => {
        if (err) {
            console.log("ERROR: ", err);
            return {
                success: false,
                message: "Could not save the new ministry",
                data: {}
            }
        }
        console.log("Succes: ", newUser);
        return newUser;
    }).then(data => data)
}