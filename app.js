import express from "express";
import bodyParser from "body-parser";
import { graphql, GraphQLSchema } from "graphql";
import { graphiqlExpress, graphqlExpress } from "graphql-express-server";

const app = express();

app.server