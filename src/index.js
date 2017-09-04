import http from "http";
import express from "express";
import bodyParser from "body-parser";
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
    console.log("MongoURI: ",process.env.MONGODB_URI);
    mongoURL = process.env.MONGODB_URI;
}

mongoose.connect(mongoURL);
// mongoose.connect(mongoURL);
// Routes

app.use("/graphql", bodyParser.json(),graphqlExpress({schema}));
app.use("/graphiql",graphiqlExpress({endpointURL:"/graphql"}));

let port = process.env.PORT || config.port

app.listen(port);
console.log("Listening on port " + port);


export default app;
