class HTTP {
	basicHeaders = {
		"Content-Type": "application/json",
		Accept: "application/json",
	};
	url = "/graphql";

	async QraphQL(query: string) {
		try {
			const response = await fetch(this.url, {
				method: "POST",
				headers: this.basicHeaders,
				body: JSON.stringify({ query }),
			});
			const data = await response.json();
			return {
				status: response.status,
				data,
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
