import Dib from "../models/dib";

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
    
}

export const createDib = (root,args) => {
    let newDib = new Dib();
    newDib.title = args.title;
    newDib.desc = args.desc;
    newDib.uid = args.uid;

    return newDib.save(err => {
        if (err) {
            console.log("Error creating dib: ",err);
            return {
                data:{},
                success:false
            }
        }

        return newDib;
    }).then(dib => dib);
}