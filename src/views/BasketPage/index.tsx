import { Link } from "react-router-dom";
import { ListPage } from "../ListManager";

export const BasketPage = () => {
	return (
		<div>
			<ListPage pageTitle="Varukorgen" />
			<div className="flex justify-center pt-6">
				<Link to="/checkout">
					<button className="border-2 text-2xl pt-2 pb-2 pr-8 pl-8 cursor-pointer">
						Till Kassan
					</button>
				</Link>
			</div>
		</div>
	);
};
