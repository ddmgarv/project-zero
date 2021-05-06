import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema } from "graphql";
import { UserType } from "./GraphQL/types/userType";
import dotenv from "dotenv";
import "colors";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

// const RootQueryType: GraphQLObjectType = new GraphQLObjectType({
// 	name: "Query",
// 	description: "Root Query",
// 	fields: () => ({
// 		user: {
// 			type: UserType,
// 			description: "A Single User",
// 			args: {
// 				id: { type: GraphQLInt },
// 			},
// 			resolve: (parent, args) => {
// 				// authors.find((author) => author.id === args.id)
// 			},
// 		},
// 		authors: {
// 			type: new GraphQLList(AuthorType),
// 			description: "List of All Authors",
// 			resolve: () => authors,
// 		},
// 	}),
// });

// const RootMutationType: GraphQLObjectType = new GraphQLObjectType({
// 	name: "Mutation",
// 	description: "Root Mutation",
// 	fields: () => ({
// 		addAuthor: {
// 			type: AuthorType,
// 			description: "Add a Author",
// 			args: {
// 				name: { type: GraphQLNonNull(GraphQLString) },
// 			},
// 			resolve: (parent, args) => {
// 				const author = {
// 					id: authors.length + 1,
// 					name: args.name,
// 				};
// 				authors.push(author);
// 				return author;
// 			},
// 		},
// 	}),
// });

// const schema = new GraphQLSchema({
// 	query: RootQueryType,
// 	mutation: RootMutationType,
// });

// app.use("/", require("/firebase"));

// app.use(
// 	"/graphql",
// 	graphqlHTTP({
// 		schema,
// 		graphiql: true,
// 	})
// );

app.listen(port, () => console.log("Server running in port:".green, port));
