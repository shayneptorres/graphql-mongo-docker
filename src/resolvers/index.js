import { dib, dibs, dibsForGroup, createDib } from "./dib-resolver";
import { user, usersForGroup } from "./user-resolver";
import { signUp } from "./signUpResolver";
import { login } from "./loginResolver";
import { group, createGroup, groupsForUser } from "./groupResolver";


export const resolvers = {
    Query: {
        signUp,
        login,
        dib,
        user,
        group
    },
    Group: {
        users: usersForGroup,
        dibs: dibsForGroup
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