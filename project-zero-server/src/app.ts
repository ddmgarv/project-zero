import express from "express";
import { graphqlHTTP } from "express-graphql";
import graphqlConfig from "./graphqlConfig";
import "./config/envConfig";
import "colors";

const app = express();

const port = process.env.PORT || 8080;

// app.use("/", require("/firebase"));

app.use(
	"/graphql",
	graphqlHTTP({
		...graphqlConfig,
		graphiql: true,
	})
);

app.listen(port, () => console.log("Server running in port:".green, port));
