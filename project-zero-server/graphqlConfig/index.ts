import Firebase from "@/services/firebase";
import { GraphQLInt, GraphQLList, GraphQLString, GraphQLObjectType, GraphQLSchema } from "graphql";
import { UserType } from "./types";

const RootQueryType: GraphQLObjectType = new GraphQLObjectType({
	name: "Query",
	description: "Root Query",
	fields: () => ({
		user: {
			type: UserType,
			description: "A Single User",
			args: {
				id: { type: GraphQLInt },
			},
			resolve: async (parent, args) => {
				const data = Firebase.getDocument(`users/${args.id}`);
				return data;
			},
		},
		// chats: {
		// 	type: new GraphQLList(AuthorType),
		// 	description: "List of All Authors",
		// 	resolve: () => authors,
		// },
	}),
});

const RootMutationType: GraphQLObjectType = new GraphQLObjectType({
	name: "Mutation",
	description: "Root Mutation",
	fields: () => ({
		createUser: {
			type: UserType,
			description: "Create User",
			args: {
				email: { type: GraphQLString },
				password: { type: GraphQLString },
				confirmPassword: { type: GraphQLString },
			},
			resolve: (parent, args) => {},
		},
	}),
});

export default new GraphQLSchema({
	query: RootQueryType,
	mutation: RootMutationType,
});
