import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import { MessageType } from "./messageType";
import { UserType } from "./userType";

export const ChatType: GraphQLObjectType = new GraphQLObjectType({
	name: "Message",
	description: "This represents a Message",
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLString) },
		dateCreated: { type: GraphQLNonNull(GraphQLString) },
		chats: { type: GraphQLList(MessageType) },
		senders: { type: GraphQLList(UserType) },
	}),
});
