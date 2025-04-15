import { Carousel } from "./subs/Carousel";
import { ProductPage } from "./subs/ProductPage";

export const ProductDetailsPage = () => {
	return (
		<div>
			<ProductPage />
			<div className="hidden sm:block">
				<Carousel />
			</div>
		</div>
	);
};
