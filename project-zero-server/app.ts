import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType } from "graphql";
import dotenv from "dotenv";
import "colors";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

// const RootQueryType: GraphQLObjectType = new GraphQLObjectType({
// 	name: "Query",
// 	description: "Root Query",
// 	fields: () => ({
// 		book: {
// 			type: BookType,
// 			description: "A Single Book",
// 			args: {
// 				id: { type: GraphQLInt },
// 			},
// 			resolve: (parent, args) => books.find((book) => book.id === args.id),
// 		},
// 		books: {
// 			type: new GraphQLList(BookType),
// 			description: "List of All Books",
// 			resolve: () => books,
// 		},
// 		author: {
// 			type: AuthorType,
// 			description: "A Single Author",
// 			args: {
// 				id: { type: GraphQLInt },
// 			},
// 			resolve: (parent, args) => authors.find((author) => author.id === args.id),
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
// 		addBook: {
// 			type: BookType,
// 			description: "Add a book",
// 			args: {
// 				name: { type: GraphQLNonNull(GraphQLString) },
// 				authorId: { type: GraphQLNonNull(GraphQLInt) },
// 			},
// 			resolve: (parent, args) => {
// 				const book = {
// 					id: books.length + 1,
// 					name: args.name,
// 					authorId: args.authorId,
// 				};
// 				books.push(book);
// 				return book;
// 			},
// 		},
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

// app.use(
// 	"/graphql",
// 	graphqlHTTP({
// 		schema,
// 		graphiql: true,
// 	})
// );

app.listen(port, () => console.log("Server running in port:".green, port));
