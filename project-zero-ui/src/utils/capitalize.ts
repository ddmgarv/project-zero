export default function capitalize(value: string): string | null {
	if (typeof value !== "string") return null;
	return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
