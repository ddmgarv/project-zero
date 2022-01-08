import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

const DateScalar = {
	Date: new GraphQLScalarType({
		name: "DateScalar",
		description: "A Date scalar",
		serialize(value) {
			// Value sent to the client.
			return value.getTime();
		},
		parseValue(value) {
			// Value from the client.
			return new Date(value);
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return new Date(Number(ast.value)); // ast value is always in string format
			}
			return null;
		},
	}),
};

export default DateScalar;
