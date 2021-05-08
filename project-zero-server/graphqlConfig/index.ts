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
			resolve: async (parent, args) => {
				const { email, password, confirmPassword } = args;
				if (!email || !password) return "Email is empty.";
				if (confirmPassword !== password) return "Passwords doesn't match.";
				try {
					await Firebase.createUser({ email, password });
					return "User created";
				} catch (error) {
					console.error(error);
					return "Error creating user.";
				}
			},
		},
	}),
});

export default new GraphQLSchema({
	query: RootQueryType,
	mutation: RootMutationType,
});
