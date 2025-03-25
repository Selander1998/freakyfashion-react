import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useArticles } from "../../../hooks/useArticles";

type CardProps = {
	name: string;
	price: number;
	imageUrl: string;
	createdAt: Date;
};

const isItemNew = (createdAt: Date) => {
	const today = new Date();
	const dayDifference = (today.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24);
	return dayDifference < 7;
};

const Card = ({ name, price, imageUrl, createdAt }: CardProps) => {
	return (
		<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
			<a href={`/products/${name}`}>
				<img src={imageUrl} alt={name} className="w-full" />
			</a>
			{isItemNew(createdAt) && (
				<p className="absolute bg-green-400 top-3 left-3 border-2 p-1">Nyhet</p>
			)}
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
				{articles.map((article) => (
					<Card
						key={article.id}
						name={article.name}
						price={article.price}
						imageUrl={article.imageUrl}
						createdAt={new Date(article.createdAt)}
					/>
				))}
			</div>
		);
};
