import Dib from "../models/dib";
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
    return Dib.find({uid:root.id},(err,dibs) => {
        if (err) {
            return null
        } else {
            return dibs
        }
    }).then(dibs => dibs)
}

export const createDib = (root,args) => {
    return validateUser(args).then(user => {
        if (user){
            let newDib = new Dib();
            newDib.title = args.title;
            newDib.desc = args.desc;
            newDib.uid = args.id;
            newDib.url = args.url;
        
            return newDib.save(err => {
                if (err) {
                    return null
                }
        
                return newDib;
            }).then(dib => dib);
        } else {
            return null
        }
    })
}