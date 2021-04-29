import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } from "graphql";
import dotenv from "dotenv";
import "colors";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

const authors = [
	{ id: 1, name: "J. K. Rowling" },
	{ id: 2, name: "J. R. R. Tolkien" },
	{ id: 3, name: "Brent Weeks" },
];

const books = [
	{ id: 1, name: "Harry Potter and the Chamber of Secrets", authorId: 1 },
	{ id: 2, name: "Harry Potter and the Prisoner of Azkaban", authorId: 1 },
	{ id: 3, name: "Harry Potter and the Goblet of Fire", authorId: 1 },
	{ id: 4, name: "The Fellowship of the Ring", authorId: 2 },
	{ id: 5, name: "The Two Towers", authorId: 2 },
	{ id: 6, name: "The Return of the King", authorId: 2 },
	{ id: 7, name: "The Way of Shadows", authorId: 3 },
	{ id: 8, name: "Beyond the Shadows", authorId: 3 },
];

const BookType: GraphQLObjectType = new GraphQLObjectType({
	name: "Book",
	description: "This represents a book written by an author",
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLInt) },
		name: { type: GraphQLNonNull(GraphQLString) },
		authorId: { type: GraphQLNonNull(GraphQLInt) },
		author: {
			type: AuthorType,
			resolve: (book) => authors.find((author) => author.id === book.authorId),
		},
	}),
});

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
	name: "Author",
	description: "This represents an author of a book",
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLInt) },
		name: { type: GraphQLNonNull(GraphQLString) },
		books: {
			type: new GraphQLList(BookType),
			resolve: (author) => books.filter((book) => book.authorId === author.id),
		},
	}),
});

const RootQueryType: GraphQLObjectType = new GraphQLObjectType({
	name: "Query",
	description: "Root Query",
	fields: () => ({
		book: {
			type: BookType,
			description: "A Single Book",
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (parent, args) => books.find((book) => book.id === args.id),
		},
		books: {
			type: new GraphQLList(BookType),
			description: "List of All Books",
			resolve: () => books,
		},
		author: {
			type: AuthorType,
			description: "A Single Author",
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (parent, args) => authors.find((author) => author.id === args.id),
		},
		authors: {
			type: new GraphQLList(AuthorType),
			description: "List of All Authors",
			resolve: () => authors,
		},
	}),
});

const RootMutationType: GraphQLObjectType = new GraphQLObjectType({
	name: "Mutation",
	description: "Root Mutation",
	fields: () => ({
		addBook: {
			type: BookType,
			description: "Add a book",
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				authorId: { type: GraphQLNonNull(GraphQLInt) },
			},
			resolve: (parent, args) => {
				const book = {
					id: books.length + 1,
					name: args.name,
					authorId: args.authorId,
				};
				books.push(book);
				return book;
			},
		},
		addAuthor: {
			type: AuthorType,
			description: "Add a Author",
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve: (parent, args) => {
				const author = {
					id: authors.length + 1,
					name: args.name,
				};
				authors.push(author);
				return author;
			},
		},
	}),
});

const schema = new GraphQLSchema({
	query: RootQueryType,
	mutation: RootMutationType,
});

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(port, () => console.log("Server running in port:".green, port));
