import User from "../models/user";

export const user = (root,args) => {
    let id = root ? root.uid : args.id
    return User.findById(id, (err,user) => {
        console.log(user);
        if (user) {
            console.log("user was found");
            return user
        } else {
            console.log("user does not exist");
            return null
        }
    }).then(user => user);
}