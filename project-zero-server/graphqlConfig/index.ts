import { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLSchema, buildSchema } from "graphql";
import Firebase from "@/services/firebase";
import { User, CreateUser } from "./types";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    ${User}
    ${CreateUser}
`);

const root = {
	createUser: async (args: { email: string; password: string; confirmPassword: string }) => {
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
};

export default {
	schema,
	root,
};
