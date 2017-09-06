import bcrypt from "bcrypt-nodejs";
import User from "../models/user";

export const signUp = (root,args) => {
    return User.findOne({email:args.email},(err,user) =>{
        if (err) {
            return {
                success:false,
                data:[],
                message:"There was a error."
            }
        }
    }).then(data => {
        console.log( data);
        if (data) {
            return null
        } else {
            let rando1 = Math.floor(Math.random() * 999) + 100
            let rando2 = Math.floor(Math.random() * 999) + 100
            let rando3 = Math.floor(Math.random() * 999) + 100
        
            let newUser = new User();
            newUser.name = args.name;
            newUser.email = args.email;
            newUser.username = args.username;
            newUser.appID = `${args.username}-${rando1}.${rando2}.${rando3}`
            newUser.password = bcrypt.hashSync(args.password);
            newUser.access_token = bcrypt.hashSync(args.email);
        
            return newUser.save( err => {
                if (err){
                    return {
                         success: false,
                         message: "Could not create new user",
                         data: {}
                     }
                 }
                return newUser
            }).then(data => {
                return data
            })
        }
    })   
}