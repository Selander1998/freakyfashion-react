import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProductCardProps {
	article: {
		title: string;
		imageUrl: string;
		brand: string;
		description: string;
		price: number;
	};
}

export const ProductCard = ({ article }: ProductCardProps) => {
	if (!article) return <p>Could not find product data</p>;
	return (
		<div className="flex flex-col p-4 sm:flex-row sm:gap-4">
			<div className="relative flex flex-col sm:min-w-2/5 lg:min-w-1/2">
				<img src={article.imageUrl} alt={article.title} className="w-full" />
				<FontAwesomeIcon icon={faHeart} className="text-2xl" />
			</div>
		</div>
	);
};

{
	/*
<main>
    <div class="details-info-container">
        <h3><%= article.title %></h3>
        <p class="manufacturer"><%= article.brand %></p>
        <b class="description"><%= article.description %></b>
        <span><%= article.price %></span>
        <button>Lägg i varukorg</button>
    </div>
</main>

*/
}
