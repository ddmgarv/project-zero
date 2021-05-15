import express from "express";
import { graphqlHTTP } from "express-graphql";
import graphqlConfig from "./graphql";
import "colors";

const app = express();

const port = process.env.PORT || 8080;
console.log(process.env);

app.use(
	"/graphql",
	graphqlHTTP({
		...graphqlConfig,
		graphiql: true,
	})
);

app.listen(port, () => console.log("Server running in port:".green, port));
