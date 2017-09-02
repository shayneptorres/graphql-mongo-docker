import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../resolvers/index.js";

const typeDefs = `
type Dib {
    id: String
    name: String
    desc: String
    uid: String
    user: User
}

type User {
    id: String
    name: String
    dibs: [Dib]
}

type Query {
    dib(id : String) : Dib
    dibs : [Dib]
    user(id: String) : User
}
`

const schema = makeExecutableSchema({typeDefs,resolvers});

export default schema;