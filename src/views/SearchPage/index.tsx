import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const apiUrl = import.meta.env.VITE_API_URL;

type CardProps = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	brand: string;
};

const Card = ({
	name,
	price,
	imageUrl,
	brand,
}: {
	name: string;
	price: number;
	imageUrl: string;
	brand: string;
}) => {
	return (
		<div className="relative grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
			<a href={`/products/${name}`}>
				<img src={imageUrl} alt={name} className="w-full" />
			</a>
			<a href="#" className="absolute right-7 bottom-[6.5rem]">
				<FontAwesomeIcon icon={faHeart} className="text-2xl" />
			</a>
			<div className="flex justify-between relative">
				<h3>{name}</h3>
				<span>{price}kr</span>
			</div>
			<span>{brand}</span>
		</div>
	);
};

export const SearchPage = () => {
	const location = useLocation();
	const [articles, setArticles] = useState<CardProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const query = searchParams.get("query");

		if (!query) {
			setError("No search query provided");
			setLoading(false);
			return;
		}
		const fetchAllMatchingArticles = async () => {
			try {
				const response = await fetch(`${apiUrl}/api/search?query=${encodeURIComponent(query)}`);
				if (!response.ok) {
					throw new Error("Products not found");
				}
				const data = await response.json();
				setArticles(Array.isArray(data) ? data : [data]);
			} catch (error) {
				console.error("Error fetching articles:", error);
				setError(error instanceof Error ? error.message : "An unknown error occurred");
				setArticles([]);
			} finally {
				setLoading(false);
			}
		};

		fetchAllMatchingArticles();
	}, [location.search]);

	if (loading) return <p>Loading...</p>;
	if (error) return <h1>Error: {error}</h1>;
	if (articles.length === 0) return <h1>No products found</h1>;

	return (
		<div>
			<div className="text-2xl font-bold text-center mt-4 mb-4">
				Hittade {articles.length} {articles.length === 1 ? "produkt" : "produkter"}
			</div>
			{articles.map((article) => (
				<Card
					key={article.id}
					name={article.name}
					price={article.price}
					imageUrl={article.imageUrl}
					brand={article.brand}
				/>
			))}
		</div>
	);
};
