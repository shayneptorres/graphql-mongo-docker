import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../resolvers/index.js";

const typeDefs = `
type Dib {
    id: String
    title: String
    desc: String
    url: String
    uid: String
    user: User
}

type Group {
    id: String
    appID: String
    name: String
    desc: String
    users: [User]
    dibs: [Dib]
}

type User {
    id: String
    appID: String
    username: String
    email: String
    password: String
    access_token: String
    dibs: [Dib]
    groups: [Group]
}

type Query {
    signUp(email: String, password: String, username: String) : User
    login(email: String, password: String) : User
    dib(id : String) : Dib
    user(id: String) : User
}

type Mutation {
    createDib(id: String, groupId: String, access_token: String, title: String, desc: String, url: String) : Dib
    createGroup(id: String, access_token: String, name: String, desc: String) : Group
}
`

const schema = makeExecutableSchema({typeDefs,resolvers});

export default schema;