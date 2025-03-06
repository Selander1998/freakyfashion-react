import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavButtons = () => {
	return (
		<nav className="flex justify-between gap-3 items-center">
			<a href="#">
				<FontAwesomeIcon icon={faHeart} className="text-2xl" />
			</a>
			<a href="#">
				<FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
			</a>
		</nav>
	);
};

export default NavButtons;
