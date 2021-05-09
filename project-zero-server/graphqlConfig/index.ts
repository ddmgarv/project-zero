import { buildSchema } from "graphql";
import Firebase from "@/services/firebase";
import { CreateUser } from "@/typescript/User";
import * as GraphQLTypes from "./types";

const typesArray = Object.values(GraphQLTypes);

// Construct a schema, using GraphQL schema language.
const schema = buildSchema(typesArray.join("\n"));

const root = {
	createUser: async (args: CreateUser) => {
		const { email, password, confirmPassword, ...otherProps } = args;
		try {
			if (!email || !password) throw "Email is empty.";
			if (confirmPassword !== password) throw "Passwords doesn't match.";
			const userCredentials = await Firebase.createUser({ email, password });
			await Firebase.createUserDocument(userCredentials, { email, ...otherProps });
			return "User created";
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
};

export default {
	schema,
	root,
};
