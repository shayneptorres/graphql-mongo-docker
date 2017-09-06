import bcrypt from "bcrypt-nodejs";
import User from "../models/user";

export const login = (root,args) => {
    return User.findOne({email:args.email},(err,user) =>{
        if (err) {
            return {
                success:false,
                data:[],
                message:"There was a error."
            }
        }
    }).then(data => {
        if (data) {
            let pass = bcrypt.compareSync(args.password,data.password);
            if (pass) {
                return data
            } else {
                return null
            }
        } else {
            return null
        }
    }).then(data => data)
}