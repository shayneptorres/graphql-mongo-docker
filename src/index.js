import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { graphql, GraphQLSchema } from "graphql";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";

import config from "./config/config";
import schema from "./schema/index";

const app = express();

app.server = http.createServer(app);

// Routes

app.use("/graphql", bodyParser.json(),graphqlExpress({schema}));
app.use("/graphiql",graphiqlExpress({endpointURL:"/graphql"}));

app.listen(config.port);
console.log("Listening on port " + config.port);

export default app;
