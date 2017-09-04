import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { graphql, GraphQLSchema } from "graphql";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import mongoose from "mongoose";

import config from "./config/config";
import schema from "./schema/index";



const app = express();

app.server = http.createServer(app);

let mongoURL = ""

if(app.settings.env == "development"){
    mongoURL = config.devMongoURL
} else {
    console.log("ENVs:", process.env);
    mongoURL = process.env.MONGODB_URI;
}

mongoose.connect("mongodb://heroku_pxlprzqx:124llhve5lep4aq27224oseion@ds119064.mlab.com:19064/heroku_pxlprzqx");
// mongoose.connect(mongoURL);
// Routes

app.use("/graphql", bodyParser.json(),graphqlExpress({schema}));
app.use("/graphiql",graphiqlExpress({endpointURL:"/graphql"}));

let port = process.env.PORT || config.port

app.listen(port);
console.log("Listening on port " + port);


export default app;
