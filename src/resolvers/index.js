import { dib, dibs, dibsForUser, dibsForGroup, createDib } from "./dib-resolver";
import { user, usersForGroup } from "./user-resolver";
import { signUp } from "./signUpResolver";
import { login } from "./loginResolver";
import { group, groupsByName, createGroup, groupsForUser } from "./groupResolver";


export const resolvers = {
    Query: {
        signUp,
        login,
        dib,
        dibs,
        user,
        group,
        groups: groupsByName
    },
    Group: {
        users: usersForGroup,
        dibs: dibsForGroup
    },
    User: {
        dibs: dibsForUser,
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