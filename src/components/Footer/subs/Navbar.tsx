import { faFaceSmile, faGlobe, faPlane, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarIcons = () => {
	return (
		<section className="flex flex-wrap gap-4 justify-around basis-full p-4">
			<div className="footer-navbar-icon">
				<FontAwesomeIcon icon={faGlobe} className="text-2xl" />
				<h3>Gratis frakt och returer</h3>
			</div>
			<div className="footer-navbar-icon">
				<FontAwesomeIcon icon={faPlane} className="text-2xl" />
				<h3>Expressfrakt</h3>
			</div>
			<div className="footer-navbar-icon">
				<FontAwesomeIcon icon={faShieldAlt} className="text-2xl" />
				<h3>Säkra betalningar</h3>
			</div>
			<div className="footer-navbar-icon">
				<FontAwesomeIcon icon={faFaceSmile} className="text-2xl" />
				<h3>Nyheter varje dag</h3>
			</div>
		</section>
	);
};

export default NavbarIcons;
