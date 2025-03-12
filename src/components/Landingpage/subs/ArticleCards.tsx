import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useArticles } from "../../../hooks/useArticles";

type CardProps = {
	name: string;
	price: number;
};

const Card = ({ name, price }: CardProps) => {
	return (
		<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
			<a href="/products/<%= card.slug %>">
				<img src="https://placehold.co/500x700" alt="<%= card.title %>" className="w-full" />
			</a>
			<p className="absolute bg-green-400 top-3 left-3 border-2 p-1">
				Nyhet - Apply if item is added less than 7 days ago
			</p>
			<a href="#" className="absolute right-4 bottom-14">
				<FontAwesomeIcon icon={faHeart} className="text-2xl" />
			</a>
			<div className="flex justify-between relative">
				<h3>{name}</h3>
				<span>{price}kr</span>
			</div>
			<span>brand here</span>
		</div>
	);
};

export const ArticleCards = () => {
	const { articles, error, loading } = useArticles(8);
	if (!loading && !error)
		return (
			<div>
				{articles.map((article, index) => (
					<Card key={index} name={article.name} price={article.price} />
				))}
			</div>
		);
};
