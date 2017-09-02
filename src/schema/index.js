import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../resolvers/index.js";

const typeDefs = `
type Test {
    name: String
    desc: String
}

type Query {
    test: Test
}
`

const schema = makeExecutableSchema({typeDefs,resolvers});

export default schema;