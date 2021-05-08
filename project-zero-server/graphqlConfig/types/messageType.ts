import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { UserType } from "./userType";

export const MessageType: GraphQLObjectType = new GraphQLObjectType({
	name: "Message",
	description: "This represents a Message",
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLString) },
		message: { type: GraphQLNonNull(GraphQLString) },
		status: { type: GraphQLNonNull(GraphQLString) },
		date: { type: GraphQLNonNull(GraphQLString) },
		sender: { type: UserType },
	}),
});
