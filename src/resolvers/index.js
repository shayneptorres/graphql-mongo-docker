import { dib, dibs, dibsForUser, dibsForGroup, createDib } from "./dib-resolver";
import { usersForGroup } from "./users/index";
import { user } from "./user-resolver";
import { signUp } from "./signUpResolver";
import { login } from "./loginResolver";
import { group, groupsByName, createGroup, groupsForUser, groupForDib } from "./groupResolver";


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
        user,
        group: groupForDib
    },
    Mutation: {
        createDib,
        createGroup
    }
}