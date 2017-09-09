import { dib, dibs, createDib } from "./dib-resolver";
import { user, usersForGroup } from "./user-resolver";
import { signUp } from "./signUpResolver";
import { login } from "./loginResolver";
import { createGroup, groupsForUser } from "./groupResolver";


export const resolvers = {
    Query: {
        signUp,
        login,
        dib,
        user
    },
    Group: {
        users: usersForGroup
    },
    User: {
        dibs,
        groups: groupsForUser
    },
    Dib: {
        user
    },
    Mutation: {
        createDib,
        createGroup
    }
}