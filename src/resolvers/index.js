import {dib, dibs} from "./dib-resolver";
import {user} from "./user-resolver";

import axios from "axios";

export const resolvers = {
    Query: {
        dib,
        dibs,
        user
    },
    Dib: {
        user(root,args){
            return axios.get(`http://localhost:3000/users/${root.uid}`)
            .then(resp => resp.data);
        }
    },
    User: {
        dibs(root,args){
            console.log("ROOT");
            console.log(root);
            return axios.get(`http://localhost:3000/dibs?uid=${root.id}`)
            .then(resp => resp.data);
        }
    }
}