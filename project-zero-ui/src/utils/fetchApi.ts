export default async function fetchApi() {
	const response = await fetch("/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ query: "{ hello }" }),
	});

	const data = await response.json();

	return {
		response,
		data,
	};
}
