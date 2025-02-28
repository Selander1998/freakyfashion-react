import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavButtons = () => {
	return (
		<nav className="ml-auto">
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
