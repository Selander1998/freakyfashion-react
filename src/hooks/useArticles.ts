import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

export type Article = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	brand: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: Date;
};

export const useArticles = (limit: number) => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		setLoading(true);
		const fetchArticles = async (limit: number) => {
			try {
				const response = await fetch(`${apiUrl}/data/${limit}`);
				if (!response.ok) {
					throw Error(response.statusText);
				}
				const result = (await response.json()) as Article[];
				setArticles(result);
				setLoading(false);
			} catch (error: unknown) {
				setError(`Could not fetch articles: ${error}`);
			}
		};
		fetchArticles(limit);
	}, [limit]);
	return { articles, error, loading };
};
