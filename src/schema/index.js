import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../resolvers/index.js";

const typeDefs = `
type Dib {
    id: String
    title: String
    desc: String
    uid: String
    user: User
}

type User {
    id: String
    name: String
    email: String
}

type Query {
    dib(id : String) : Dib
    user(id: String) : User
}

type Mutation {
    createUser(email:String,name:String) : User
    createDib(title:String,desc:String,uid:String) : Dib
}
`

const schema = makeExecutableSchema({typeDefs,resolvers});

export default schema;