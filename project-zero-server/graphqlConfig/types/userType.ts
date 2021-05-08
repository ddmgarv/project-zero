import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLBoolean, GraphQLList } from "graphql";

const UserDataType = new GraphQLObjectType({
	name: "UserData",
	fields: {
		age: { type: GraphQLNonNull(GraphQLInt) },
		direction: { type: GraphQLNonNull(GraphQLString) },
		country: { type: GraphQLNonNull(GraphQLString) },
		firstName: { type: GraphQLNonNull(GraphQLString) },
		lastName: { type: GraphQLNonNull(GraphQLString) },
		fullName: { type: GraphQLNonNull(GraphQLString) },
	},
});

const UserStatusType = new GraphQLObjectType({
	name: "UserData",
	fields: {
		disabled: { type: GraphQLNonNull(GraphQLBoolean) },
		active: { type: GraphQLNonNull(GraphQLBoolean) },
		lastConnection: { type: GraphQLNonNull(GraphQLString) },
	},
});

const UserFields = () => ({
	id: { type: GraphQLNonNull(GraphQLString) },
	email: { type: GraphQLNonNull(GraphQLString) },
	data: { type: UserDataType },
	status: { type: UserStatusType },
	friends: { type: GraphQLList(UserType) },
});

export const UserType: GraphQLObjectType = new GraphQLObjectType({
	name: "User",
	description: "This represents a User",
	fields: () => ({ ...UserFields() }),
});
