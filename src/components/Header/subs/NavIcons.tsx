import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const NavIcons = () => {
	return (
		<nav className="flex justify-between gap-3 items-center">
			<a href="#">
				<FontAwesomeIcon icon={faHeart} className="text-2xl" />
			</a>
			<Link to="/basket">
				<FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
			</Link>
		</nav>
	);
};
