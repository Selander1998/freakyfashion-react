import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useArticles } from "../../../hooks/useArticles";

type CardProps = {
	name: string;
	price: number;
	imageUrl: string;
	brand: string;
	createdAt: Date;
};

const isItemNew = (createdAt: Date) => {
	const today = new Date();
	const dayDifference = (today.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24);
	return dayDifference < 7;
};

const isItemHidden = (createdAt: Date) => {
	const now = new Date();
	return createdAt.getTime() > now.getTime();
};

const Card = ({ name, price, imageUrl, brand, createdAt }: CardProps) => {
	if (isItemHidden(createdAt)) return null;

	return (
		<div className="relative flex flex-col p-2">
			{isItemNew(createdAt) && (
				<p className="absolute top-4 left-4 bg-green-400 text-white text-sm px-2 py-1 rounded border-2 border-white">
					Nyhet
				</p>
			)}

			<a href={`/products/${name}`}>
				<img src={imageUrl} alt={name} className="w-full h-auto object-cover" />
			</a>

			<div className="flex flex-col justify-between flex-1 mt-4">
				<div className="flex justify-between items-center">
					<h3 className="text-sm font-medium">{name}</h3>
					<span className="text-sm">{price}kr</span>
				</div>
				<span className="text-sm text-gray-600 mt-1">{brand}</span>
			</div>

			<button className="absolute bottom-22 right-8">
				<FontAwesomeIcon icon={faHeart} className="text-2xl text-black" />
			</button>
		</div>
	);
};

export const ArticleCards = () => {
	const { articles, error, loading } = useArticles(8);

	if (!loading && !error) {
		return (
			<div className="grid sm:grid-cols-2 lg:grid-cols-4">
				{articles.map((article) => (
					<Card
						key={article.id}
						name={article.name}
						price={article.price}
						imageUrl={article.imageUrl}
						brand={article.brand}
						createdAt={new Date(article.createdAt)}
					/>
				))}
			</div>
		);
	}
};
