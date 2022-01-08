import { buildSchema } from "graphql";
import Firebase from "../services/firebase";
import { CreateUserFields } from "../interfaces/User";
import * as GraphQLTypes from "./types";
import * as GraphQLResolvers from "./resolvers";

const typesArray = Object.values(GraphQLTypes);

// Construct a schema, using GraphQL schema language.
const schema = buildSchema(typesArray.join("\n"));

const root = {
	createUser: async (args: CreateUserFields) => {
		const { email, password, confirmPassword, ...otherProps } = args;
		try {
			if (!email || !password) throw "Email is empty.";
			if (confirmPassword !== password) throw "Passwords doesn't match.";
			const userCredentials = await Firebase.createUser({ email, password });
			await Firebase.createUserDocument(userCredentials, { email, ...otherProps });
			return true;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
};

export default {
	schema,
	root,
	resolvers: GraphQLResolvers,
};
