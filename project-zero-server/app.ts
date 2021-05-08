import express from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import "colors";
import graphqlSchema from "./graphqlConfig";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use("/", require("/firebase"));

app.use(
	"/graphql",
	graphqlHTTP({
		schema: graphqlSchema,
		graphiql: true,
	})
);

app.listen(port, () => console.log("Server running in port:".green, port));
