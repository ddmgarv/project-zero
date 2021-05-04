import capitalize from "./capitalize";

export default function fieldsCreator(value: string) {
	return {
		id: value,
		name: value,
		type: value,
		placeholder: capitalize(value),
	};
}
