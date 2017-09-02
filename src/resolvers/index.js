import {dib, dibs, createDib} from "./dib-resolver";
import {user, createUser} from "./user-resolver";

import User from "../models/user";

export const resolvers = {
    Query: {
        dib,
        user
    },
    Mutation: {
        createUser,
        createDib
    },
    Dib: {
        user
    }
}