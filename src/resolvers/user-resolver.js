import User from "../models/user";
import { dibs } from "./dib-resolver";

export const user = (root,args) => {
    const id = root ? root.uid : args.id
    return User.findById(id, (err,user) =>{
        if (!err) {
            console.log(err);
            return {
                data:{},
                success:false
            }
        }
        return user
    }).then(user => user);
}