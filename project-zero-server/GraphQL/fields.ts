import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLBoolean } from "graphql";

export const UserFields = {
	id: { type: GraphQLNonNull(GraphQLString) },
	data: {
		type: new GraphQLObjectType({
			age: GraphQLNonNull(GraphQLInt),
			direction: GraphQLNonNull(GraphQLString),
			country: GraphQLNonNull(GraphQLString),
			firstName: GraphQLNonNull(GraphQLString),
			lastName: GraphQLNonNull(GraphQLString),
			fullName: GraphQLNonNull(GraphQLString),
		}),
	},
	status: {
		type: new GraphQLObjectType({
			disabled: GraphQLNonNull(GraphQLBoolean),
			active: GraphQLNonNull(GraphQLBoolean),
			lastConnection: GraphQLNonNull(GraphQLString),
		}),
	},
};
