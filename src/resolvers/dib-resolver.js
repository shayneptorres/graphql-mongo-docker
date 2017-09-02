import axios from "axios";

export const dib = (root,args) => {
    console.log(`GET http://localhost:3000/dibs/${args.id}`);
    return axios.get(`http://localhost:3000/dibs/${args.id}`)
        .then(resp => resp.data);
}

export const dibs = (root,args) => {
    console.log(`GET http://localhost:3000/dibs`);
    return axios.get(`http://localhost:3000/dibs/`)
        .then(resp => resp.data);
}