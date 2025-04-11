import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export interface ProductCardProps {
	article: {
		name: string;
		imageUrl: string;
		brand: string;
		description: string;
		price: number;
	};
}

export const ProductCard = ({ article }: ProductCardProps) => {
	const addToCart = (article: ProductCardProps["article"]) => {
		const cocks = localStorage.getItem("cart");

		if (cocks) {
			const cart = JSON.parse(cocks);
			localStorage.setItem("cart", JSON.stringify([...cart, article]));
			return;
		}

		localStorage.setItem("cart", JSON.stringify([article]));
	};

	useEffect(() => {
		if (article) {
			document.title = article.name;
		}
	}, [article]);
	return (
		<div className="flex flex-col pt-4 sm:flex-row sm:gap-4">
			<div className="relative flex flex-col sm:min-w-2/5 lg:min-w-1/2">
				<img src={article.imageUrl} alt={article.name} className="w-full" />
				<FontAwesomeIcon icon={faHeart} className="text-3xl absolute right-5 bottom-5" />
			</div>
			<div className="flex flex-col gap-3 py-4">
				<p className="text-2xl">{article.name}</p>
				<p>{article.brand}</p>
				<p>{article.description || "Missing description"}</p>
				<span className="pt-2">{article.price}kr</span>
				<button
					onClick={() => addToCart(article)}
					className="shadow-2xl p-2 font-bold border-2 cursor-pointer
					rounded-lg bg-gray-200 hover:bg-gray-300
					active:bg-gray-400 transition duration-200 ease-in-out sm:w-1/2 md:w-1/3">
					Lägg i varukorg
				</button>
			</div>
		</div>
	);
};
