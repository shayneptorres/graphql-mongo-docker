import axios from "axios";

export const user = (root,args) => {
    console.log(`GET http://localhost:3000/users/${args.id}`);
    return axios.get(`http://localhost:3000/users/${args.id}`)
        .then(resp => resp.data);
}