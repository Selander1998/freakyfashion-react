import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
const apiUrl = import.meta.env.VITE_API_URL;

export const ProductPage = () => {
	const { name } = useParams();
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchArticle = async () => {
			try {
				const response = await fetch(`${apiUrl}/api/fetchArticle/${name}`);
				if (!response.ok) {
					throw new Error("Product not found");
				}
				const data = await response.json();
				setArticle(data);
			} catch (error) {
				console.error("Error fetching article:", error);
				setArticle(null);
			} finally {
				setLoading(false);
			}
		};

		fetchArticle();
	}, [name]);

	if (loading) return <p>Loading...</p>;
	if (!article) return <h1>Product not found</h1>;

	return <ProductCard article={article} />;
};
