import {dib, dibs, createDib} from "./dib-resolver";
import {user} from "./user-resolver";
import {signUp} from "./signUpResolver";
import {login} from "./loginResolver";


export const resolvers = {
    Query: {
        signUp,
        login,
        dib,
        user
    },
    User: {
        dibs
    },
    Dib: {
        user
    },
    Mutation: {
        createDib
    }
}