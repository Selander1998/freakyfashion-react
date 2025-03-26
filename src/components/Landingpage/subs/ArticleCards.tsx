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
	if (isItemHidden(createdAt)) {
		return null;
	}

	return (
		<div className="relative grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
			{isItemNew(createdAt) && (
				<p className="absolute bg-green-400 top-7 left-7 border-2 p-1">Nyhet</p>
			)}
			<a href={`/products/${name}`}>
				{/* FIXME: This link should look like "/products/svart-tshirt" */}
				<img src={imageUrl} alt={name} className="w-full" />
			</a>
			<a href="#" className="absolute right-7 bottom-[6.5rem]">
				{/* No idea how to do this properly */}
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
						brand={article.brand}
						createdAt={new Date(article.createdAt)}
					/>
				))}
			</div>
		);
};
