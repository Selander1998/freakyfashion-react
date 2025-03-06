import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavButtons = () => {
	return (
		<nav className="flex justify-between gap-4 items-center">
			<a href="#">
				<FontAwesomeIcon icon={faHeart} />
			</a>
			<a href="#">
				<FontAwesomeIcon icon={faShoppingCart} />
			</a>
		</nav>
	);
};

export default NavButtons;
