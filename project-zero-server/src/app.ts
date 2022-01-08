import express from "express";
import { graphqlHTTP } from "express-graphql";
import graphqlConfig from "./graphql";
import "colors";

const app = express();

const port = process.env.PORT || 8080;

app.use(
	"/graphql",
	graphqlHTTP({
		...graphqlConfig,
		graphiql: true,
	})
);

app.listen(port, () => console.log("Running GraphQL API server in port:".green, port));
